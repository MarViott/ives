import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Nav() {
  const { isDarkMode, toggleTheme } = useTheme();

  // Colores según el modo
  const navBg = isDarkMode ? "#333" : "#fff";
  const navColor = isDarkMode ? "#fff" : "#1a1a1a";
  const linkColor = isDarkMode ? "#fff" : "#1a1a1a";
  const linkHoverBg = isDarkMode ? "#555" : "#e0e0e0";

  return (
    <nav style={{ backgroundColor: navBg, color: navColor, padding: "10px" }}>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: 0,
        }}
      >
        {[
          { to: "/", label: "Home" },
          { to: "/services", label: "Services" },
          { to: "/about", label: "About" },
          { to: "/contact", label: "Contact" },
        ].map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              style={{
                color: linkColor,
                textDecoration: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.background = linkHoverBg)}
              onMouseLeave={(e) => (e.target.style.background = "transparent")}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <button
            onClick={toggleTheme}
            style={{
              background: isDarkMode ? "#ffd700" : "#646cff",
              color: isDarkMode ? "#1a1a1a" : "#fff",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              border: "none",
              cursor: "pointer",
              fontSize: "0.9rem",
              marginLeft: "10px",
            }}
            title={isDarkMode ? "Modo claro" : "Modo oscuro"}
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
