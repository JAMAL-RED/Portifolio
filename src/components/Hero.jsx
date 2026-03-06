import { motion } from "framer-motion";
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import "./Hero.css";

// Import your profile photo here — place it at: src/assets/profile.jpg
// import profileImg from "../assets/profile.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

const socials = [
  { icon: FiGithub, href: "https://github.com", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FiTwitter, href: "https://twitter.com", label: "Twitter" },
];

export default function Hero() {
  return (
    <div className="hero">
      {/* Background glow */}
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      <div className="hero__inner container">
        {/* Left: Text */}
        <div className="hero__content">
          <motion.div className="hero__badge" {...fadeUp(0.1)}>
            <span className="hero__badge-dot" />
            Available for work
          </motion.div>

          <motion.h1 className="hero__title" {...fadeUp(0.2)}>
            Eai,  Sou o
            <br />
            <span className="hero__title-name">JAMAL</span>
            <br />
            <span className="hero__title-role">Designer</span>
            <span className="hero__title-amp"> & </span>
            <span className="hero__title-role">Developer</span>
          </motion.h1>

          <motion.p className="hero__desc" {...fadeUp(0.35)}>
            Desenvolvedor & Entusiasta de Tecnologia

            Desenvolvo experiências digitais usando C#, React, JavaScript,
            CSS e tecnologias web modernas — combinando código limpo,
            interfaces bem pensadas e aplicações que realmente ganham a  
            <em> Vida</em>.
          </motion.p>

          <motion.div className="hero__actions" {...fadeUp(0.45)}>
            <a href="/cv.pdf" download className="hero__btn hero__btn--primary">
              <FiDownload size={16} />
              Baixar CV
            </a>
            <a href="#contact" className="hero__btn hero__btn--secondary">
              Contrate-me
              <FiArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div className="hero__socials" {...fadeUp(0.55)}>
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: Photo */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.88, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__photo-wrap">
            <div className="hero__photo-ring" />
            <div className="hero__photo-ring hero__photo-ring--2" />
            <div className="hero__photo">
              <img src="./img/img.png" alt="" />
              <div className="hero__photo-placeholder">
               
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              className="hero__badge-float hero__badge-float--1"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="hero__badge-float-icon">✦</span>
              <div>
                <div className="hero__badge-float-num">3+</div>
                <div className="hero__badge-float-label">Anos de Experiencia</div>
              </div>
            </motion.div>

            <motion.div
              className="hero__badge-float hero__badge-float--2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <span className="hero__badge-float-icon">⬡</span>
              <div>
                <div className="hero__badge-float-num">40+</div>
                <div className="hero__badge-float-label">Projetos Concluidos</div>
              </div>
            </motion.div>
          </div>

          {/* Decorative dots */}
          <div className="hero__dots" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          className="hero__scroll-dot"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <span>Role para baixo</span>
      </motion.div>
    </div>
  );
}