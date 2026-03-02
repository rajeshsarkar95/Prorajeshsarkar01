'use client'
import { useState, useEffect, useCallback } from 'react'
import { useTheme } from '@/hooks/useTheme'

const NAV_LINKS = [
  { label: 'About',       href: '#about'},
  { label: 'Skills',      href: '#skills'},
  { label: 'Projects',    href: '#projects'},
  { label: 'Experience',  href: '#experience'},
  {label:'Education',     href:"#Education"}, 
  { label: 'Contact',     href: '#contact' },
]

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNav = useCallback((href: string) => {
    setMenuOpen(false)
    scrollTo(href)
  }, [])

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[var(--bg2)]/90 backdrop-blur-xl border-b border-[var(--border)] shadow-lg'
            : '',
        ].join(' ')}
      >
        <div className="c-container">
          <div className="flex items-center justify-between h-[72px]">
            <button
              onClick={() => scrollTo('#hero')}
              aria-label="Go to top"
              className="font-syne text-[22px] font-black tracking-tight bg-gradient-to-r from-[var(--accent)] to-[var(--accent3)] bg-clip-text text-transparent"
            >
              RS.
            </button>
            <ul className="hidden md:flex gap-9 list-none" role="list">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <button onClick={() => handleNav(l.href)} className="c-nav-link">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                className="w-10 h-10 rounded-[10px] border border-[var(--border2)] bg-[var(--surface)] text-[var(--text2)] flex items-center justify-center text-base transition-all hover:bg-[var(--surface2)] hover:text-[var(--text)] hover:border-[var(--accent)]"
              >
                {isDark ? '🌙' : '☀️'}
              </button>
              <button
                onClick={() => handleNav('#contact')}
                className="hidden md:block c-btn-primary py-2 px-5 text-sm"
                aria-label="Hire Rajesh Sarkar"
              >
                Hire Me
              </button>
              <button
                onClick={() => setMenuOpen((o) => !o)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-0"
              >
                <span className="block w-[22px] h-0.5 rounded bg-[var(--text)] transition-all" />
                <span className="block w-[22px] h-0.5 rounded bg-[var(--text)] transition-all" />
                <span className="block w-[22px] h-0.5 rounded bg-[var(--text)] transition-all" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div
          role="navigation"
          aria-label="Mobile navigation"
          className="fixed top-[72px] left-0 right-0 z-40 bg-[var(--bg2)] border-b border-[var(--border)] backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-1 p-5 list-none">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => handleNav(l.href)}
                  className="w-full text-left px-4 py-3 rounded-lg text-[var(--text2)] hover:text-[var(--text)] hover:bg-[var(--surface)] transition-all text-sm font-medium"
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li className="mt-2">
              <button
                onClick={() => handleNav('#contact')}
                className="w-full c-btn-primary justify-center py-3"
              >
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
