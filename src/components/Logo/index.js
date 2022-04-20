import React from "react";
import "./style.css";
import Mail from "../../assets/mail.svg";

function Logo() {
  return (
    <a
      className="logo flex align-center "
      href="mailto:gulderensungur@outlook.com"
    >
      <div className="logoImage">
        <img src={Mail} alt="Mail Logo" />
      </div>

      <span className="email">gulderensungur@outlook.com</span>
    </a>
  );
}

export default Logo;
