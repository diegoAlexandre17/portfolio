export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <span className="section-tag">Sobre mí</span>
            <h2 className="section-title">
              Apasionado por crear{" "}
              <span className="text-accent">experiencias digitales</span>
            </h2>
            <section className="section-body">
              <p>Antes Administrativo, Hoy Desarrollador Frontend.</p>
              <p>
                Me especializo en React y su ecosistema, transformando ideas en
                productos digitales escalables que resuelven problemas reales.
              </p>
              <p>
                Cuando no estoy escribiendo código, exploro nuevas tecnologías,
                para estar al día de las últimas tendencias.
              </p>
            </section>
            <a href="/cv/CV-DiegoRangel-2026.pdf" download className="btn">
              Descargar CV
            </a>
          </div>

          <div className="about-card">
            <img
              className="about__img"
              src="imgs/Programming-bro.svg"
              alt="Ilustración de programación"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
