import { Link } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Studio' },
  { to: '/projects', label: 'Projects' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://instagram.com', label: 'Instagram' },
  { href: 'https://www.linkedin.com', label: 'LinkedIn' },
  { href: 'https://www.behance.net', label: 'Behance' },
  { href: 'https://www.pinterest.com', label: 'Pinterest' },
]

function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        {/* Top */}
        <div className="grid gap-12 border-b border-bone/12 py-20 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex flex-col leading-none">
              <span className="font-sans text-3xl font-light tracking-[0.5em] text-bone">
                TMAA
              </span>
              <span className="mt-2 text-[0.6rem] font-medium tracking-[0.62em] text-stone-light">
                ARCHITECTS
              </span>
            </div>
            <p className="mt-8 max-w-sm font-display text-2xl leading-snug font-light text-bone/80 italic">
              Tropical-modern architecture in quiet dialogue with light,
              climate and landscape.
            </p>
          </div>

          {/* Navigate */}
          <div className="lg:col-span-3">
            <span className="eyebrow text-stone-light">Navigate</span>
            <ul className="mt-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-bone/70 transition-colors duration-300 hover:text-bone"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <span className="eyebrow text-stone-light">Studio</span>
            <ul className="mt-6 flex flex-col gap-3 text-bone/70">
              <li>
                <a
                  href="mailto:tmaaarchitects@gmail.com"
                  className="whitespace-nowrap transition-colors hover:text-bone"
                >
                  tmaaarchitects@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+94718745473" className="transition-colors hover:text-bone">
                  071 874 5473
                </a>
              </li>
              <li className="leading-relaxed">Colombo, Sri Lanka</li>
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-2">
            <span className="eyebrow text-stone-light">Follow</span>
            <ul className="mt-6 flex flex-col gap-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-bone/70 transition-colors duration-300 hover:text-bone"
                  >
                    {social.label}
                    <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <p className="eyebrow text-bone/40">
            © {new Date().getFullYear()} TMAA Architects - All rights reserved
          </p>
          <div className="flex items-center gap-8">
            <span className="eyebrow text-bone/40">Designed in Sri Lanka</span>
            <button
              type="button"
              onClick={scrollTop}
              className="eyebrow group inline-flex items-center gap-2 text-bone/60 transition-colors hover:text-bone"
            >
              Back to top
              <span className="transition-transform duration-300 group-hover:-translate-y-1">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
