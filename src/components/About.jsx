import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    FiCode, FiLayout, FiDatabase, FiSmartphone,
} from "react-icons/fi";
import { SiReact, SiJavascript, SiHtml5, SiNodedotjs, SiFigma } from "react-icons/si";
import { FiCpu } from "react-icons/fi"; // fallback para CSS3
import "./About.css";

const skills = [
    { name: "React", icon: SiReact, level: 90, color: "#61dafb" },
    { name: "JavaScript", icon: SiJavascript, level: 88, color: "#f7df1e" },
    { name: "HTML5", icon: SiHtml5, level: 95, color: "#e34f26" },
    { name: "CSS3", icon: FiCpu, level: 92, color: "#264de4" },
    { name: "Node.js", icon: SiNodedotjs, level: 72, color: "#3c873a" },
    { name: "Figma", icon: SiFigma, level: 80, color: "#f24e1e" },
];

const services = [
    { icon: FiLayout, title: "UI Design", desc: "Interfaces bonitas e centradas no usuário, com atenção aos detalhes em nível de pixel." },
    { icon: FiCode, title: "Frontend Dev", desc: "Aplicações React limpas e performáticas, seguindo as melhores práticas modernas." },
    { icon: FiDatabase, title: "Backend", desc: "APIs RESTful e lógica no lado do servidor com Node.js e bancos de dados." },
    { icon: FiSmartphone, title: "Responsive", desc: "Designs mobile-first que ficam incríveis em qualquer tamanho de tela." },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

function SkillBar({ name, icon: Icon, level, color, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            className="about__skill"
            variants={itemVariants}
        >
            <div className="about__skill-header">
                <div className="about__skill-name">
                    <Icon size={16} style={{ color }} />
                    <span>{name}</span>
                </div>
                <span className="about__skill-pct">{level}%</span>
            </div>
            <div className="about__skill-track">
                <motion.div
                    className="about__skill-fill"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${level}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
                />
            </div>
        </motion.div>
    );
}

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div className="about">
            {/* Background glow */}
            <div className="about__glow" />

            <div className="about__inner container" ref={ref}>
                {/* Header */}
                <motion.div
                    className="about__header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <p className="section-label"> Sobre Mim </p>
                    <h2 className="section-title">
                        Crafting digital<br />
                        <span className="about__title-accent">experiencias</span>
                    </h2>
                </motion.div>

                {/* Two columns */}
                <div className="about__cols">
                    {/* Left: Bio + Services */}
                    <div className="about__left">
                        <motion.p
                            className="about__bio"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.15 }}
                        >
                            Sou um desenvolvedor front-end e designer de UI apaixonado, baseado em São Paulo, Brasil.
                            Com mais de 3 anos de experiência, sou especializado na criação de aplicações web modernas
                            que são ao mesmo tempo bonitas e altamente funcionais. ✨

                        </motion.p>
                        <motion.p
                            className="about__bio"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.22 }}
                        >
                            Quando não estou programando, você pode me encontrar explorando novas tendências de design, 
                            contribuindo para projetos de código aberto ou experimentando animações criativas. 

                        </motion.p>

                        {/* Services */}
                        <motion.div
                            className="about__services"
                            variants={containerVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                        >
                            {services.map((s) => (
                                <motion.div key={s.title} className="about__service" variants={itemVariants}>
                                    <div className="about__service-icon">
                                        <s.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="about__service-title">{s.title}</h4>
                                        <p className="about__service-desc">{s.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Skills */}
                    <div className="about__right">
                        <motion.h3
                            className="about__skills-title"
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.3 }}
                        >
                            Habilidades
                        </motion.h3>
                        <motion.div
                            className="about__skills"
                            variants={containerVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                        >
                            {skills.map((skill, i) => (
                                <SkillBar key={skill.name} {...skill} index={i} />
                            ))}
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            className="about__stats"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5, duration: 0.7 }}
                        >
                            {[
                                { num: "3+", label: "Anos de experiência" },
                                { num: "40+", label: "Projetos" },
                                { num: "20+", label: "Clientes satisfeitos" },
                            ].map(({ num, label }) => (
                                <div key={label} className="about__stat">
                                    <span className="about__stat-num">{num}</span>
                                    <span className="about__stat-label">{label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}