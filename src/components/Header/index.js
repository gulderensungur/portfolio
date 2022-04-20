import React from "react";
import Logo from "../Logo";
import Navbar from "../Navbar";
import "./style.css";

function Header() {
  return (
    <div className="header flex align-center justify-between">
      <Logo />
      <Navbar />
    </div>
  );
}

export default Header;
