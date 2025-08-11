// CSS
import "./Navbar.css";

// Hooks
import { useState } from "react";

// Components
import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(search);
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie />
          MoviesLib
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search || ""}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
