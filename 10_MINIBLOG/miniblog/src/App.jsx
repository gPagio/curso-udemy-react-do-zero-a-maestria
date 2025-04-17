// Css
import "./App.css";

// React Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
