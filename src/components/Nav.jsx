import { useState, useEffect } from "react";
import { Link } from "react-router";
import SideBtn from "./SideBtn";

function Nav() {
  const [mode, setMode] = useState(localStorage.getItem("ecs-mode") ? JSON.parse(localStorage.getItem("ecs-mode")) : false);

  useEffect(() => {
    if (mode) {
      document.body.classList.add("light");
      localStorage.setItem("ecs-mode", true);
    } else {
      document.body.classList.remove("light");
      localStorage.setItem("ecs-mode", false);
    }
  }, [mode]);

  return (
    <nav className="nav">
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/version2" className="nav-link">
          Version 2
        </Link>
        <Link to="/version1" className="nav-link">
          Version 1
        </Link>
        <Link to="/gallery" className="nav-link">
          Gallery
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
