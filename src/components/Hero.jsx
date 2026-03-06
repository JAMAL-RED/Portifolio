import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container" id="home">
      <div className="hero-content">
        <span className="code-tag">&lt;html&gt;</span>
        <span className="code-tag indent">&lt;body&gt;</span>

        <div className="indent-2">
          <span className="code-tag">&lt;h1&gt;</span>
          <h1 className="hero-title">
            Olá,
            <br />
            sou o <span className="name-highlight">Jamal</span>
          </h1>
          <span className="code-tag">&lt;/h1&gt;</span>

          <span className="code-tag">&lt;p&gt;</span>
          <p className="hero-subtitle">Full Stack Developer</p>
          <span className="code-tag">&lt;/p&gt;</span>
        </div>

        <span className="code-tag indent">&lt;/body&gt;</span>
        <span className="code-tag">&lt;/html&gt;</span>
      </div>

      <div className="hero-visual">
        <div className="avatar-circle">
          {/* Aqui você pode colocar uma imagem de um mascote ou logo */}
          <img
            src="https://api.dicebear.com/7.x/bottts/svg?seed=React"
            alt="Avatar"
            className="avatar-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
