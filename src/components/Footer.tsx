import { NAV_LINKS } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#" className="nav-logo">
          <span className="nav-logo__bracket">&lt;</span>
          DARF
          <span className="nav-logo__bracket">/&gt;</span>
        </a>
        <p className="footer__copy">© 2026· Diseñado y desarrollado con ♥</p>
        <div className="footer__links">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="footer__link">{l.label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
