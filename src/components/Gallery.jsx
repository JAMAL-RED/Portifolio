import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FiExternalLink, FiGithub, FiArrowUpRight } from "react-icons/fi";
import "./Gallery.css";

// Place project images in src/assets/ and import them here
// import project1 from "../assets/project1.jpg";

const categories = ["All", "Web App", "UI Design", "Mobile"];

const projects = [
  {
    id: 1,
    title: "Dashboard Financeiro",
    category: "Aplicação Web",
    desc: "Painel de análise financeira em tempo real desenvolvido com React e Chart.js. Possui visualização de dados ao vivo, modo claro/escuro e design responsivo.",
    tags: ["React", "Chart.js", "REST API"],
    github: "https://github.com",
    live: "https://example.com",
    color: "#c8f04e",
    // image: project1,
  },
  {
    id: 2,
    title: "Plataforma E-commerce ",
    category: "Web App",
      desc: "Solução de e-commerce full stack com gerenciamento de carrinho, pagamentos com Stripe e painel administrativo..",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    color: "#64a8ff",
  },
  {
    id: 3,
    title: "Kit de UI para Aplicativo de Viagem",
    category: "UI Design",
    desc: "Kit de interface no Figma com mais de 50 componentes para aplicações de viagem e reservas, com sistema de design completo.",
    tags: ["Figma", "Design System"],
    github: "https://github.com",
    live: "https://example.com",
    color: "#ff7eb3",
  },
  {
    id: 4,
    title: "Gerenciador de Tarefas Pro",
    category: "Web App",
    desc: "Ferramenta de gerenciamento de projetos colaborativa com atualizações em tempo real, quadros arrastar-e-soltar e espaços de equipe.",
    tags: ["React", "Firebase", "DnD"],
    github: "https://github.com",
    live: "https://example.com",
    color: "#ffa76e",
  },
  {
    id: 5,
    title: "Rastreador de Fitness",
    category: "Rastreador de Fitness",
    desc: "Aplicativo de fitness multiplataforma com registro de treinos, gráficos de progresso e acompanhamento nutricional..",
    tags: ["React Native", "Expo"],
    github: "https://github.com",
    live: "https://example.com",
    color: "#6ef5c4",
  },
  {
    id: 6,
    title: "Portfolio Builder",
    category: "UI Design",
    desc: "Construtor de portfólio com arrastar e soltar, visualização ao vivo e publicação com um clique.",
    tags: ["React", "CSS", "Animation"],
    github: "https://github.com",
    live: "https://example.com",
    color: "#c8f04e",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

function ProjectCard({ project }) {
  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      glareEnable={true}
      glareMaxOpacity={0.06}
      glareColor="#c8f04e"
      glarePosition="all"
      scale={1.02}
      transitionSpeed={1500}
      className="gallery__tilt"
    >
      <motion.article
        className="gallery__card"
        variants={cardVariants}
        style={{ "--card-accent": project.color }}
      >
        {/* Image area */}
        <div className="gallery__card-img">
          {project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <div className="gallery__card-placeholder">
              <div
                className="gallery__card-shape"
                style={{ background: project.color }}
              />
            </div>
          )}
          <div className="gallery__card-overlay">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="gallery__card-link">
              <FiGithub size={18} />
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="gallery__card-link">
              <FiExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="gallery__card-body">
          <span className="gallery__card-cat">{project.category}</span>
          <h3 className="gallery__card-title">{project.title}</h3>
          <p className="gallery__card-desc">{project.desc}</p>

          <div className="gallery__card-footer">
            <div className="gallery__card-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="gallery__card-tag">{tag}</span>
              ))}
            </div>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="gallery__card-view">
              View <FiArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </motion.article>
    </Tilt>
  );
}

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="gallery">
      <div className="gallery__inner container" ref={ref}>
        {/* Header */}
        <motion.div
          className="gallery__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="section-label">Meu Trabalho</p>
            <h2 className="section-title">
              Selecione <span className="gallery__title-accent">Projetos</span>
            </h2>
          </div>
          <p className="gallery__subtitle">
           Uma coleção selecionada de coisas que eu desenvolvi —
            de aplicações web complexas a sistemas de interface bem refinados.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="gallery__filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery__filter${filter === cat ? " active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
              {filter === cat && (
                <motion.span
                  className="gallery__filter-bg"
                  layoutId="filterBg"
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          className="gallery__grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          key={filter}
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}