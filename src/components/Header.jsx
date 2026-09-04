import { Link, NavLink } from "react-router-dom";
import { useSaved, useSelected } from "../hooks/useSession.js";

export default function Header() {
  const { saved } = useSaved();
  const { selected } = useSelected();

  return (
    <header className="hd">
      <Link to="/" className="hd__mark">
        TOO<b>JIN</b>
        <span>Template Archive</span>
      </Link>

      <nav className="hd__nav">
        <NavLink to="/" end className={({ isActive }) => `hd__link${isActive ? " hd__link--on" : ""}`}>
          전체
        </NavLink>
        <NavLink to="/saved" className={({ isActive }) => `hd__link${isActive ? " hd__link--on" : ""}`}>
          보관함
          {saved.length > 0 && <em className="hd__count">{saved.length}</em>}
          {selected && saved.length === 0 && <em className="hd__count">•</em>}
        </NavLink>
      </nav>
    </header>
  );
}
