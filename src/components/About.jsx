
import "./About.css";


const About = () => {
  return (
    <section
      className="about-section"
      id="about"
    >
      <div className="about-left">
        <span className="code-tag">&lt;section id="quem_sou"&gt;</span>

        <div className="indent">
          <span className="code-tag">&lt;h2&gt;</span>
          <h2 className="about-title">
            Por que me <span className="title-highlight">escolher</span> para
            seu projeto?
          </h2>
          <span className="code-tag">&lt;/h2&gt;</span>

          <span className="code-tag">&lt;p&gt;</span>
          <p className="about-description">
            Transformo conceitos em código limpo. Meu trabalho é garantir que
            sua aplicação não seja apenas funcional, mas também escalável e
            bonita por dentro e por fora.
          </p>
          <span className="code-tag">&lt;/p&gt;</span>
        </div>

        <span className="code-tag">&lt;/section&gt;</span>
      </div>

      <div className="about-right">
        <div className="skill-card featured">
          <div className="skill-icon">{"{ }"}</div>
          <div className="skill-info">
            <h4>Front-end</h4>
            <p>React, Javascript, Css e Html</p>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-icon">#</div>
          <div className="skill-info">
            <h4>Back-end</h4>
            <p>C#, SQLServer, SQL</p>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-icon">&lt;/&gt;</div>
          <div className="skill-info">
            <h4>UI/UX Styling</h4>
            <p>Figma, Bootstrap, CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
