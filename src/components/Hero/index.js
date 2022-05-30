import React from "react";
import "./style.css";
import avatar from "../../assets/avatar.png";

function Hero() {
  return (
    <section id="hero" className="flex flex-col align-center ">
      <div className="profile-wrapper flex flex-col align-center">
        <div className="profile-image">
          <img className="avatar" src={avatar} alt="profile" />
        </div>
        <div className="profile-text">
          <p>Hi, I&apos;m Gül 🚀</p>
        </div>
      </div>
      <div className="profile-slogan flex flex-col align-center">
        <h1>I build things for the web</h1>
        <p>
          I am a junior front-end developer eager to learn, keen on UI
          development and coding.
        </p>
        <button>
          <span>Connect with me</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
