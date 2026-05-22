import { PROJECTS } from '../data'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portafolio</span>
          <h2 className="section-title">Proyectos destacados</h2>
          <p className="section-desc">
            Una selección de mis trabajos más recientes y representativos
          </p>
        </div>
        <div className="projects-grid">
          {PROJECTS.map(project => (
            <div key={project.title} className="project-card">
              <div className="project-card__top">
                <div className="project-card__dots">
                  <span /><span /><span />
                </div>
              </div>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.desc}</p>
              <div className="project-card__tags">
                {project.tags.map(t => (
                  <span key={t} className="tag tag--sm">{t}</span>
                ))}
              </div>
              <div className="project-card__footer">
                <a href="#" className="project-link">Ver proyecto →</a>
                <a href="#" className="project-link project-link--ghost">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
