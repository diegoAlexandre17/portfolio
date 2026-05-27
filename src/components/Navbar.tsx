import { useState, useEffect } from 'react'
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
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
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

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <a href="#" className="nav-logo">
        <span className="nav-logo__bracket">&lt;</span>
        DARF
        <span className="nav-logo__bracket">/&gt;</span>
      </a>

      <nav className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}>
        {NAV_LINKS.map(l => (
          <a
            key={l.href}
            href={l.href}
            className={`nav-link${activeSection === l.href ? ' nav-link--active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </a>
        ))}
      </nav>

      <div className={`nav-overlay${menuOpen ? ' nav-overlay--visible' : ''}`} onClick={() => setMenuOpen(false)} />

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
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
