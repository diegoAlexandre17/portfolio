import { GithubIcon } from "../assets/icons/GithubIcon";
import { LinkedinIcon } from "../assets/icons/LinkedinIcon";
import { MapPinIcon } from "../assets/icons/MapPinIcon";
import { MailIcon } from "../assets/icons/MailIcon";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-inner">
          <span className="section-tag">Contacto</span>

          <h2 className="section-title">
            ¿Tienes un proyecto en mente?
          </h2>

          <p className="section-desc">
            Estoy disponible para proyectos freelance, trabajo remoto y
            colaboraciones. Hablemos sobre cómo puedo ayudarte a construir algo
            increíble.
          </p>

          <div className="hero__badges">
            <span className="hero__badge">
              <MapPinIcon /> Argentina
            </span>
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

          <div className="contact-actions">
            <a href="mailto:elalexdgr@gmail.com" className="btn btn--lg">
              <MailIcon /> Enviar email
            </a>
            <a
              href="/cv/CV-DiegoRangel-2026.pdf"
              download
              className="btn btn--outline btn--lg"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
