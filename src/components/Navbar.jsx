import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">
        MiTienda
      </NavLink>
      <div className="nav-links">
        <NavLink to="/products" className="nav-link">
          Productos
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
