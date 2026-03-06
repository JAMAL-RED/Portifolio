import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiSend, FiMail, FiMapPin, FiPhone, FiCheck } from "react-icons/fi";
import "./Contact.css";

const contactInfo = [
  { icon: FiMail, label: "Email", value: "hello@Jamal.dev", href: "mailto:hello@Jamal.dev" },
  { icon: FiPhone, label: "Phone", value: "+55 11 99999-0000", href: "tel:+5511999990000" },
  { icon: FiMapPin, label: "Location", value: "São Paulo, Brazil", href: null },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="contact">
      <div className="contact__glow contact__glow--1" />
      <div className="contact__glow contact__glow--2" />

      <div className="contact__inner container" ref={ref}>
        {/* Header */}
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Entre em Contato
</p>
          <h2 className="section-title">
          Vamos trabalhar juntos<br />
            <span className="contact__title-accent">Juntos</span>
          </h2>
          <p className="contact__desc">
            Tem um projeto em mente? Eu adoraria ouvir sobre ele. Envie-me uma mensagem
            e vamos criar algo incrível juntos.
          </p>
        </motion.div>

        <div className="contact__cols">
          {/* Left: Info */}
          <motion.div
            className="contact__info"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <motion.div key={label} className="contact__info-item" variants={itemVariants}>
                <div className="contact__info-icon">
                  <Icon size={18} />
                </div>
                <div>
                  <span className="contact__info-label">{label}</span>
                  {href ? (
                    <a href={href} className="contact__info-value contact__info-link">
                      {value}
                    </a>
                  ) : (
                    <span className="contact__info-value">{value}</span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Decorative card */}
            <motion.div className="contact__deco" variants={itemVariants}>
              <p className="contact__deco-text">
                "O melhor jeito de prever o futuro é criá-lo."
              </p>
              <span className="contact__deco-author">— Alan Kay</span>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="contact__form-wrap"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__row">
                <div className="contact__field">
                  <label className="contact__label" htmlFor="name">Nome Completo</label>
                  <input
                    className="contact__input"
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Alex Johnson"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="contact__field">
                  <label className="contact__label" htmlFor="email">Endereço de Email</label>
                  <input
                    className="contact__input"
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="contact__field">
                <label className="contact__label" htmlFor="message">Mensagem</label>
                <textarea
                  className="contact__input contact__textarea"
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Me fale sobre seu projeto..."
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                className={`contact__submit${loading ? " loading" : ""}${sent ? " sent" : ""}`}
                disabled={loading || sent}
              >
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.span
                      key="sent"
                      className="contact__submit-content"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <FiCheck size={18} /> Mensagem Enviada!
                    </motion.span>
                  ) : loading ? (
                    <motion.span
                      key="loading"
                      className="contact__submit-content"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <span className="contact__spinner" /> Carregando…
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      className="contact__submit-content"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <FiSend size={18} /> Enviar Mensagem
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}