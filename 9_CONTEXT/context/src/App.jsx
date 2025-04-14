import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Paginas
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";

// Componentes
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
