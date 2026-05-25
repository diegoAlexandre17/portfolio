import { SKILLS } from '../data'

export default function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Tecnologías</span>
          <h2 className="section-title">Stack que domino</h2>
          <p className="section-desc">
            Herramientas y tecnologías con las que construyo productos modernos
          </p>
        </div>
        <div className="skills-grid">
          {SKILLS.map(skill => (
            <div key={skill.name} className="skill-card">
              <span className="skill-card__icon">
                <i className={skill.icon}></i>
              </span>
              <span className="skill-card__name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
