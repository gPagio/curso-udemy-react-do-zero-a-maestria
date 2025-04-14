import "./App.css";

// 1 - CONFIGURANDO REACT ROUTER
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar></Navbar>

        {/* Componente de Busca */}
        <SearchForm></SearchForm>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Redirecionamento */}
          <Route path="/company" element={<Navigate to={"/about"} />} />

          <Route path="/about" element={<About />} />
          {/* Rota Dinâmica */}
          <Route path="/products/:id" element={<Product />} />

          {/* Nested Routes */}
          <Route path="/products/:id/info" element={<Info />} />

          <Route path="/search" element={<Search />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
