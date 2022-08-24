import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="title-link">
        <h1 className="title">Doodle-ooo</h1>
      </Link>
      <div className="nav-container">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/studio" className="nav-link">
          Studio
        </Link>
        <Link to="/gallery" className="nav-link">
          Gallery
        </Link>
      </div>
    </header>
  );
}
