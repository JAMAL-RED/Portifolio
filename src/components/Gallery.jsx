import "./Gallery.css";

const Gallery = () => {
  const projetos = [
    {
      id: 1,
      nome: "Calculadora Imc",
      desc: "Plataforma que calcula o IMC com base na altura e peso. Além de gerar a classificação dela ",
      techs: ["React"],
    },
    {
      id: 2,
      nome: "Tcc Dev",
      desc: "Projeto de conclusão do curso Técnico DEV - Sesi Bariri.",
      techs: ["C#", "HTML", "CSS", "React"],
    },
    {
      id: 3,
      nome: "E_Commerce_C#",
      desc: "Plataforma completa com sistema de login e Autenticação.",
      techs: ["C#", "React"],
    },
  ];

  return (
    <section
      className="gallery-section"
      id="projects"
    >
      <h2 className="section-title">PROJETOS</h2>
      <div className="gallery-grid">
        {projetos.map((proj) => (
          <div
            key={proj.id}
            className="card"
          >
            <div className="card-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="card-content">
              <span className="card-tag">const projeto = </span>
              <h3 className="card-title">"{proj.nome}"</h3>
              <p className="card-text">{proj.desc}</p>

              <div className="card-tech-stack">
                {proj.techs.map((tech) => (
                  <span
                    key={tech}
                    className="tech-item"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
