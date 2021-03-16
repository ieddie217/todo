import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header style={headerStyle}>
      <h1> TodoList</h1>
      <Link style={linkStyle} to="/todolist">
        Home
      </Link> | <Link style={linkStyle} to="/todolist/about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "whitesmoke",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  color: 'whitesmoke',
  textDecoration: 'none'
}

export default Header;
