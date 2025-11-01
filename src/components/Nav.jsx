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
        <Link to="/team" className="nav-link">
          Makers
        </Link>
        <Link to="/testing" className="nav-link">
          Testing
        </Link>
        <Link to="/gallery" className="nav-link">
          Gallery
        </Link>
      </div>
      <div className="side-btns">
        <SideBtn
          img="/project-bellbot/source.svg"
          onClick={() => window.open("https://github.com/amcsz/bell")}
          title="View source code"
        />
        <SideBtn img="/project-bellbot/mode.svg" onClick={() => setMode(!mode)} title="Toggle light mode" />
      </div>
    </nav>
  );
}

export default Nav;
