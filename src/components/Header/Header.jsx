import { NavLink } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import style from "./Header.module.scss"

export function Header() {
  return (
    <header className={style.headerStyle}>
      <div className={style.logo}>
        <NavLink to="/">HomeLands</NavLink>
      </div>
      <Navbar />
    </header>
  );
}