export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <span className="section-tag">Sobre mí</span>
            <h2 className="section-title">
              Apasionado por crear{' '}
              <span className="text-accent">experiencias digitales</span>{' '}
              que importan
            </h2>
            <p className="section-body">
              Soy desarrollador frontend con enfoque en rendimiento, accesibilidad y
              diseño de sistemas. Me especializo en React y su ecosistema, transformando
              ideas en productos digitales escalables que resuelven problemas reales.
            </p>
            <p className="section-body" style={{ marginTop: '1rem' }}>
              Cuando no estoy escribiendo código, exploro nuevas tecnologías, contribuyo
              a proyectos open source y estudio UX/UI para crear mejores experiencias.
            </p>
            <a href="#contact" className="btn" style={{ marginTop: '2rem', display: 'inline-flex' }}>
              Descargar CV
            </a>
          </div>

          <div className="about-card">
            <div className="about-card__inner">
              <div className="about-avatar">D</div>
              <div className="about-info">
                <h3>Diego Developer</h3>
                <p>Frontend Engineer</p>
              </div>
              <div className="about-tags">
                {['React', 'TypeScript', 'Next.js', 'Node.js', 'UI/UX', 'Agile'].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
