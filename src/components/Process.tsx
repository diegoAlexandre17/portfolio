import { PROCESS_STEPS } from '../data'

export default function Process() {
  return (
    <section className="section section--alt" id="process">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Metodología</span>
          <h2 className="section-title">Cómo trabajo</h2>
          <p className="section-desc">
            Un proceso estructurado para entregar resultados excepcionales
          </p>
        </div>
        <div className="process-grid">
          {PROCESS_STEPS.map(step => (
            <div key={step.number} className="process-step">
              <span className="process-step__number">{step.number}</span>
              <h3 className="process-step__title">{step.title}</h3>
              <p className="process-step__desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
