import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { useNavbarTheme } from "../../hooks/useNavbarTheme";
import "../../styles/navbar.css";
import { importantLink, navLinks } from "../../data/navigation";



// Mirrors the old logo <img> from index.html (a generic school/graduation-cap icon).
const LOGO_SRC = "https://cdn-icons-png.flaticon.com/512/25/25694.png";


// --------------------------------------------------
export default function Navbar() {
  const { navRef, scrolled, light } = useNavbarTheme();
  const [menuState, setMenuState] = useState("closed"); // "closed" | "open" | "closing"
  const closeTimer = useRef(null);

  const closeMenu = () => {
    setMenuState("closing");
    closeTimer.current = setTimeout(() => setMenuState("closed"), 1000);
  };

  const toggleMenu = () => {
    if (menuState === "open") closeMenu();
    else {
      clearTimeout(closeTimer.current);
      setMenuState("open");
    }
  };

  // Close the mobile menu on outside click, same as the original hamburger logic.
  useEffect(() => {
    const onDocClick = (e) => {
      if (menuState !== "open") return;
      const nav = navRef.current;
      if (nav && !nav.contains(e.target)) closeMenu();
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [menuState, navRef]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const menuVisible = menuState === "open" || menuState === "closing";


  return (
    <nav
      ref={navRef}
      id="navbar"
      className={[ "site-nav", scrolled ? "is-scrolled" : "", light ? "is-light" : "", ].join(" ").trim()}
    >
      <button
        className={`hamburger-btn ${menuState === "open" ? "is-active" : ""}`}
        aria-label="Menu"
        onClick={(e) => { e.stopPropagation(); toggleMenu(); }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={[ "nav-links", menuState === "open" ? "is-open" : "", menuState === "closing" ? "is-closing" : "", ].join(" ").trim()}
        style={{ display: menuVisible ? "flex" : undefined }}
      >
        {navLinks.map((link) => (
          <Link key={link.label} to={link.href} onClick={closeMenu}>
            {link.label}
          </Link>
        ))}
      </div>

      <div className="nav-logo-section">
        <Link to={importantLink.href} className="btn-important">
          {importantLink.label}
        </Link>
        <img src={LOGO_SRC} alt="لوگوی پردیس دانش" />
      </div>
    </nav>
  );
}
