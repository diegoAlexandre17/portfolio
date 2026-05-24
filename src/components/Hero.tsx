import { GithubIcon } from "../assets/icons/GithubIcon";
import { LinkedinIcon } from "../assets/icons/LinkedinIcon";

function Particles() {
  const particles = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    delay: `${(Math.random() * 8).toFixed(2)}s`,
    duration: `${(7 + Math.random() * 10).toFixed(2)}s`,
    x: `${(Math.random() * 100).toFixed(1)}%`,
    size: `${(1.5 + Math.random() * 2.5).toFixed(1)}px`,
  }));

  return (
    <div className="particles" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={
            {
              "--delay": p.delay,
              "--duration": p.duration,
              "--x": p.x,
              "--size": p.size,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <Particles />
      <div className="hero__content">
        <h1 className="hero__title">
          Hola, soy <span className="text-accent">Diego</span>
          <br />
          Frontend Developer
        </h1>

        <p className="hero__subtitle">
          Enfocado en crear interfaces modernas, responsivas y dinámicas,
          combinando diseño y funcionalidad para transformar ideas en producto.
        </p>

        <div className="hero__badges">
          <a
            href="https://github.com/diegoAlexandre17"
            className="hero__badge hero__badge--link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/diego-alexandre-rangel/"
            className="hero__badge hero__badge--link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon /> LinkedIn
          </a>
        </div>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--lg">
            Ver proyectos
          </a>
          <a href="#contact" className="btn btn--outline btn--lg">
            Hablemos →
          </a>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll para explorar</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  );
}
