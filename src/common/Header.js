import React from "react";
import logo from "../libraryLogo.png";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "orange" };
  return (
    <>
      <header className="App-headerlocal">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Public Library</h1>
        </div>
      </header>
      <nav style={{ marginLeft: "10px" }}>
        <NavLink exact to="/" activeStyle={activeStyle}>
          Home
        </NavLink>
        {" | "}
        <NavLink to="/book" activeStyle={activeStyle}>
          Add book
        </NavLink>
        {" | "}
        <NavLink to="/upcomingbooks" activeStyle={activeStyle}>
          Upcoming Books
        </NavLink>
        {" | "}
        <NavLink to="/about" activeStyle={activeStyle}>
          About
        </NavLink>
      </nav>
    </>
  );
}

export default Header;
