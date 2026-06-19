import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Studio' },
  { to: '/projects', label: 'Projects' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

function Wordmark({ light }: { light: boolean }) {
  return (
    <span className="flex flex-col leading-none select-none">
      <span
        className={`font-sans text-[1.35rem] font-light tracking-[0.5em] transition-colors duration-500 ${
          light ? 'text-bone' : 'text-ink'
        }`}
      >
        TMAA
      </span>
      <span
        className={`mt-1 text-[0.5rem] font-medium tracking-[0.62em] transition-colors duration-500 ${
          light ? 'text-bone/70' : 'text-stone'
        }`}
      >
        ARCHITECTS
      </span>
    </span>
  )
}

function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Lock body scroll while the overlay menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Transparent only when sitting over the home hero and not yet scrolled.
  const overHero = isHome && !scrolled
  const lightContent = overHero || menuOpen

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          overHero
            ? 'bg-transparent py-6'
            : 'border-b border-line bg-bone/85 py-4 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-10 lg:px-14">
          <Link to="/" aria-label="TMAA Architects — home" className="relative z-50">
            <Wordmark light={lightContent} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-10 lg:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `eyebrow group relative transition-colors duration-300 ${
                    lightContent
                      ? 'text-bone/75 hover:text-bone'
                      : 'text-ink/65 hover:text-ink'
                  } ${isActive ? (lightContent ? 'text-bone' : 'text-ink') : ''}`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-px bg-clay transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center lg:flex">
            <Link
              to="/contact"
              className={`eyebrow rounded-full border px-6 py-2.5 transition-all duration-300 ${
                lightContent
                  ? 'border-bone/40 text-bone hover:bg-bone hover:text-ink'
                  : 'border-ink/30 text-ink hover:bg-ink hover:text-bone'
              }`}
            >
              Start a project
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[7px] lg:hidden"
          >
            <span
              className={`block h-px w-7 origin-center transition-all duration-300 ${
                lightContent ? 'bg-bone' : 'bg-ink'
              } ${menuOpen ? 'translate-y-[4px] rotate-45' : ''}`}
            />
            <span
              className={`block h-px w-7 origin-center transition-all duration-300 ${
                lightContent ? 'bg-bone' : 'bg-ink'
              } ${menuOpen ? '-translate-y-[4px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-ink transition-all duration-500 lg:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex h-full flex-col justify-between px-6 pt-32 pb-12">
          <nav className="flex flex-col">
            {links.map((link, i) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className="group border-b border-bone/10 py-5"
                style={{
                  transitionDelay: menuOpen ? `${120 + i * 70}ms` : '0ms',
                  transition: 'opacity 0.6s ease, transform 0.6s ease',
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'none' : 'translateY(16px)',
                }}
              >
                {({ isActive }) => (
                  <span className="flex items-baseline justify-between">
                    <span
                      className={`font-display text-4xl font-light transition-colors duration-300 ${
                        isActive ? 'text-clay' : 'text-bone group-hover:text-stone-light'
                      }`}
                    >
                      {link.label}
                    </span>
                    <span className="eyebrow text-bone/30">0{i + 1}</span>
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex flex-col gap-2 text-bone/60">
            <span className="eyebrow text-bone/40">Get in touch</span>
            <a
              href="mailto:tmaaarchitects@gmail.com"
              className="font-display text-2xl break-all text-bone"
            >
              tmaaarchitects@gmail.com
            </a>
            <a href="tel:+94718745473" className="text-sm">071 874 5473 · Colombo, Sri Lanka</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
