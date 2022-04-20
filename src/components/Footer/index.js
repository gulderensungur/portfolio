import Logo from "../Logo";
import React from "react";

import GitHub from "../../assets/github.svg";
import LinkedIn from "../../assets/linkedin.svg";
import StackOverflow from "../../assets/stack-overflow.svg";

import "./style.css";

function Footer() {
  return (
    <footer id="contact">
      <ul className="footer--social-list">
        <li className="social--list-item">
          <a href="https://github.com/gulderensungur">
            <img src={GitHub} alt="GitHub Profile" />
          </a>
        </li>
        <li className="social--list-item">
          <a href="https://stackoverflow.com/users/17870370/g%c3%bclderen-sungur">
            <img src={StackOverflow} alt="Stack Overflow Profile" />
          </a>
        </li>
        <li className="social--list-item">
          <a href="https://www.linkedin.com/in/gulderensungur/">
            <img src={LinkedIn} alt="LinkedIn Profile" />
          </a>
        </li>
      </ul>
      <Logo />
    </footer>
  );
}

export default Footer;
