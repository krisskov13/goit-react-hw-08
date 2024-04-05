import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <nav>
      <NavLink className={css.link} to="/register">
        Sign up
      </NavLink>
      <NavLink className={css.link} to="/login">
        Sign in
      </NavLink>
    </nav>
  );
}
