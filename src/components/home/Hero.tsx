import { Link } from 'react-router-dom'
import heroDesktop from '../../assets/homeImage1.jpg'
import heroMobile from '../../assets/homeMobileImage1.jpg'

function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      {/* Responsive backdrop: portrait crop on mobile, landscape on desktop */}
      <div className="absolute inset-0 overflow-hidden">
        <picture>
          <source media="(min-width: 768px)" srcSet={heroDesktop} />
          <img
            src={heroMobile}
            alt="A TMAA residence nestled into a tropical hillside"
            className="animate-kenburns h-full w-full object-cover"
            fetchPriority="high"
          />
        </picture>
      </div>

      {/* Cinematic gradient wash for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-transparent to-transparent" />

      {/* Side rails */}
      <div className="absolute top-1/2 left-6 hidden -translate-y-1/2 lg:block">
        <span className="eyebrow block rotate-180 text-bone/55 [writing-mode:vertical-rl]">
          Est. 2012 — Colombo, Sri Lanka
        </span>
      </div>

      <div className="absolute right-7 bottom-10 hidden flex-col items-center gap-3 lg:flex">
        <span className="eyebrow rotate-90 text-bone/55 [writing-mode:vertical-rl]">Scroll</span>
        <span className="h-14 w-px bg-bone/40">
          <span className="block h-4 w-px animate-[scrollCue_2s_ease-in-out_infinite] bg-bone" />
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-20 md:px-10 lg:px-14 lg:pb-24">
        <div className="max-w-4xl">
          <div
            className="eyebrow mb-6 flex items-center gap-4 text-bone/80"
            style={{ animation: 'fadeUp 1s ease 0.2s both' }}
          >
            <span className="h-px w-10 bg-clay" />
            Architecture · Interiors · Landscape
          </div>

          <h1 className="font-display text-[2.7rem] leading-[1.02] font-light text-bone sm:text-6xl lg:text-[5.5rem]">
            <span className="block overflow-hidden">
              <span
                className="block"
                style={{ animation: 'heroLine 1.1s cubic-bezier(0.16,0.7,0.2,1) 0.35s both' }}
              >
                Spaces in quiet
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                className="block text-stone-light italic"
                style={{ animation: 'heroLine 1.1s cubic-bezier(0.16,0.7,0.2,1) 0.5s both' }}
              >
                dialogue with nature.
              </span>
            </span>
          </h1>

          <p
            className="mt-8 max-w-xl text-base leading-relaxed text-bone/75 sm:text-lg"
            style={{ animation: 'fadeUp 1s ease 0.75s both' }}
          >
            TMAA is a Sri Lankan design studio shaping tropical-modern homes and
            sanctuaries where light, climate and landscape come first.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-5"
            style={{ animation: 'fadeUp 1s ease 0.9s both' }}
          >
            <Link
              to="/projects"
              className="eyebrow group inline-flex items-center gap-3 rounded-full bg-bone px-8 py-4 text-ink transition-colors duration-300 hover:bg-clay hover:text-bone"
            >
              Explore our work
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/about"
              className="eyebrow inline-flex items-center gap-3 text-bone/80 transition-colors duration-300 hover:text-bone"
            >
              <span className="h-px w-8 bg-bone/50" />
              About the studio
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }
        @keyframes heroLine { from { opacity: 0; transform: translateY(105%); } to { opacity: 1; transform: none; } }
      `}</style>
    </section>
  )
}

export default Hero
