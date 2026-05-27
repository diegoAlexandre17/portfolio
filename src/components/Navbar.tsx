import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { NAV_LINKS } from '../data'
import { SunIcon } from '../assets/icons/SunIcon'
import { MoonIcon } from '../assets/icons/MoonIcon'

interface NavbarProps {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      const w = window.innerWidth - document.documentElement.clientWidth
      document.body.style.paddingRight = `${w}px`
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.paddingRight = ''
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.paddingRight = ''
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.querySelector(l.href)).filter(Boolean) as Element[]
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection('#' + entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <a href="#" className="nav-logo">
          <span className="nav-logo__bracket">&lt;</span>
          DARF
          <span className="nav-logo__bracket">/&gt;</span>
        </a>

        <nav className="nav-links">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link${activeSection === l.href ? ' nav-link--active' : ''}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-end">
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {createPortal(
        <>
          <div
            className={`mobile-overlay${menuOpen ? ' mobile-overlay--visible' : ''}`}
            onClick={close}
          />
          <nav className={`mobile-panel${menuOpen ? ' mobile-panel--open' : ''}`}>
            {NAV_LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                className={`nav-link${activeSection === l.href ? ' nav-link--active' : ''}`}
                onClick={close}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </>,
        document.body
      )}
    </>
  )
}
