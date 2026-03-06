import React from "react";
import { Github, Linkedin, Instagram, ExternalLink } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>&lt;TurmaDev /&gt;</h3>
          <p style={{ fontSize: "0.85rem", opacity: 0.7 }}>
            // codando_o_amanha.sh
            <br />
            Transformando ideias em realidade digital.
          </p>
        </div>

        <div className="footer-links">
          <h4>// navegação</h4>
          <a href="#home">Home</a>
          <a href="#about">sobre</a>
          <a href="#projects">projetos</a>
        </div>

        <div className="footer-links">
          <h4>// social</h4>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} /> github
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={16} /> linkedin
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={16} /> instagram
          </a>
        </div>
      </div>

      <div
        style={{ textAlign: "center", fontSize: "0.8rem", color: "#585b70" }}
      >
        © 2026 - Desenvolvido pela Turma de Bariri
      </div>

      {/* Barra de Status integrada ao final da página
      <div className="footer-status-bar">
        <div className="status-left">
          <span>main*</span>
          <span>0 ⊗ 0 △</span>
        </div>
        <div className="status-right">
          <span>UTF-8</span>
          <span>{"{ }"} React Stable</span>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
 