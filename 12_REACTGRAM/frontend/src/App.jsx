import "./App.css";

// Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Hooks
import { useAuth } from "./hooks/useAuth";

function App() {
  const { auth, loading } = useAuth();

  console.log(loading);
  if (loading) return <p>Loading...</p>;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={auth ? <Home /> : <Navigate to={"/login"} />}
            ></Route>
            <Route
              path="/login"
              element={!auth ? <Login /> : <Navigate to={"/home"} />}
            ></Route>
            <Route
              path="/register"
              element={!auth ? <Register /> : <Navigate to={"/home"} />}
            ></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
