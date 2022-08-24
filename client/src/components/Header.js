import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <h1 className="title">Doodle-ooo</h1>
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
