// Css
import "./App.css";

// React Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Firebase
import { onAuthStateChanged } from "firebase/auth";

// Hooks
import { useEffect, useState } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Context
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <AuthContextProvider value={{ user }}>
        <BrowserRouter>
          <Navbar></Navbar>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
            </Routes>
          </div>
          <Footer></Footer>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
