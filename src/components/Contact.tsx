export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-box">
          <div className="contact-glow" />
          <span className="section-tag">Contacto</span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="section-desc" style={{ margin: '12px auto 2.5rem' }}>
            Estoy disponible para proyectos freelance, trabajo remoto y colaboraciones.
            Hablemos sobre cómo puedo ayudarte a construir algo increíble.
          </p>
          <div className="contact-actions">
            <a href="mailto:drangel@joobpay.com" className="btn btn--lg">
              ✉ Enviar email
            </a>
            <a href="#" className="btn btn--outline btn--lg">LinkedIn →</a>
            <a href="#" className="btn btn--outline btn--lg">GitHub →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
