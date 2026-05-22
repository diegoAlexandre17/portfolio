function Particles() {
  const particles = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    delay:    `${(Math.random() * 8).toFixed(2)}s`,
    duration: `${(7 + Math.random() * 10).toFixed(2)}s`,
    x:        `${(Math.random() * 100).toFixed(1)}%`,
    size:     `${(1.5 + Math.random() * 2.5).toFixed(1)}px`,
  }))

  return (
    <div className="particles" aria-hidden="true">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={
            {
              '--delay':    p.delay,
              '--duration': p.duration,
              '--x':        p.x,
              '--size':     p.size,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <Particles />
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      <div className="hero__content">
        <div className="hero__badge">Disponible para proyectos</div>

        <h1 className="hero__title">
          Hola, soy <span className="text-accent">Diego</span>
          <br />
          Frontend Developer
        </h1>

        <p className="hero__subtitle">
          Construyo interfaces modernas, rápidas y accesibles que conectan
          usuarios con productos que les encanta usar.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--lg">Ver proyectos</a>
          <a href="#contact"  className="btn btn--outline btn--lg">Hablemos →</a>
        </div>

        <div className="hero__stats">
          <div className="stat">
            <span className="stat__value">3+</span>
            <span className="stat__label">Años de experiencia</span>
          </div>
          <div className="stat__divider" />
          <div className="stat">
            <span className="stat__value">20+</span>
            <span className="stat__label">Proyectos completados</span>
          </div>
          <div className="stat__divider" />
          <div className="stat">
            <span className="stat__value">15+</span>
            <span className="stat__label">Clientes satisfechos</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll para explorar</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  )
}
