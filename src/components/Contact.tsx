import { GithubIcon } from "../assets/icons/GithubIcon";
import { LinkedinIcon } from "../assets/icons/LinkedinIcon";

function MapPinIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-glow" />

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
