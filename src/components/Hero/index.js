import React from "react";
import "./style.css";
import avatar from "../../assets/avatar.png";

function Hero() {
  return (
    <section id="hero" className="flex flex-col align-center ">
      <div className="profile-wrapper flex flex-col align-center">
        <div className="profile-image">
          <img className="avatar" src={avatar} alt="profile image" />
        </div>
        <div className="profile-text">
          <p>Hi, I&apos;m Gül 🚀</p>
        </div>
      </div>
      <div className="profile-slogan flex flex-col align-center">
        <h1>Building digital products, brands, and experience</h1>
        <p>
          added 2 packages from 3 contributors, removed 3 packages, updated 2
          packages and audited 1369 packages in 6.24s
        </p>
        <button>
          <span>Connect with me</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
