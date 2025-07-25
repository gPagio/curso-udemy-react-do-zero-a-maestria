import "./App.css";

// Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import EditProfile from "./pages/EditProfile/EditProfile";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Hooks
import { useAuth } from "./hooks/useAuth";

function App() {
  const { auth, loading } = useAuth();

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
              element={!auth ? <Login /> : <Navigate to={"/"} />}
            ></Route>
            <Route
              path="/register"
              element={!auth ? <Register /> : <Navigate to={"/"} />}
            ></Route>
            <Route
              path="/profile"
              element={auth ? <EditProfile /> : <Navigate to={"/login"} />}
            ></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
