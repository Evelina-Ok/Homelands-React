import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";

export function Navbar() {
  return (
      <nav className={style.navbar}>
        <ul>
          <li>
            <NavLink to="/">Forside</NavLink>
          </li>
          <li>
            <NavLink to="/products">Boliger til salg</NavLink>
          </li>
          <li>
            <NavLink to="/login">LOGIN</NavLink>
          </li>
        </ul>
      </nav>
  );
}
