
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section
        className="contact-section"
        id="contact"
      >
        <div className="contact-container">
          <h2 style={{ color: "white", marginBottom: "20px" }}>Contato</h2>

          <form className="contact-form">
            <div className="input-group">
              <label>nome = </label>
              <input
                type="text"
                placeholder="'Seu Nome'"
              />
            </div>
            <div className="input-group">
              <label>email = </label>
              <input
                type="email"
                placeholder="'seu@email.com'"
              />
            </div>
            <div className="input-group">
              <label>mensagem = </label>
              <textarea
                rows="4"
                placeholder="'Olá, vamos desenvolver algo?'"
              ></textarea>
            </div>
            <button
              className="hero-button"
              type="submit"
            >
              console.log("Enviar")
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
