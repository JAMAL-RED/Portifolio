import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiDribbble } from "react-icons/fi";
import "./Footer.css";

const socials = [
  { icon: FiGithub, href: "https://github.com", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FiTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FiInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FiDribbble, href: "https://dribbble.com", label: "Dribbble" },
];

const footerLinks = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer className="footer" ref={ref}>
      <div className="footer__inner container">
        {/* Top */}
        <motion.div
          className="footer__top"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <span className="footer__logo-dot" />
              JAMAL<span>folio</span>
            </a>
            <p className="footer__tagline">
        Construindo experiências digitais, um pixel de cada vez.
            </p>
          </div>

          <nav className="footer__nav">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="footer__nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer__socials">
            {socials.map(({ icon: Icon, href, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social"
                aria-label={label}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.06, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="footer__divider"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Bottom */}
        <motion.div
          className="footer__bottom"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="footer__copy">
            © {new Date().getFullYear()} JAMALFÓLIO. Criado com{" "}
            <span className="footer__heart">♥</span> Em São Paulo.
          </p>
          <p className="footer__made">
           Projetado e desenvolvido por <strong>JAMAL</strong>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}