import { Link } from 'react-router-dom'
import Reveal from '../common/Reveal'
import philosophyImage from '../../assets/homeImage5.jpg'

const stats = [
  { value: '12+', label: 'Years of practice' },
  { value: '80+', label: 'Projects realised' },
  { value: '14', label: 'Design awards' },
  { value: '6', label: 'Countries' },
]

function Philosophy() {
  return (
    <section className="bg-bone py-24 lg:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Text */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="eyebrow flex items-center gap-4 text-stone">
                <span className="h-px w-10 bg-clay" />
                01 — The Studio
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-8 font-display text-3xl leading-[1.15] font-light text-ink sm:text-4xl lg:text-[3.4rem] lg:leading-[1.12]">
                We design buildings that{' '}
                <span className="text-clay italic">belong</span> — to their
                site, their climate, and the people who live within them.
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg">
                Rooted in the tradition of tropical modernism, our work begins
                with the land. We trace the path of the sun, the fall of the
                rain and the breath of the monsoon, then shape spaces that
                weather gracefully and feel inevitable - quietly luxurious,
                deeply liveable.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <Link
                to="/about"
                className="eyebrow group mt-10 inline-flex items-center gap-3 text-ink transition-colors hover:text-clay"
              >
                <span className="h-px w-8 bg-ink transition-all duration-300 group-hover:w-12 group-hover:bg-clay" />
                Read our story
              </Link>
            </Reveal>
          </div>

          {/* Image */}
          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src={philosophyImage}
                    alt="A double-height interior opening onto a planted courtyard"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-105"
                  />
                </div>
                <span className="absolute -bottom-5 -left-5 hidden h-24 w-24 border-b border-l border-clay lg:block" />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats */}
        <Reveal delay={120}>
          <dl className="mt-20 grid grid-cols-2 gap-y-10 border-t border-line pt-12 lg:mt-28 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="font-display text-5xl font-light text-ink lg:text-6xl">
                  {stat.value}
                </dt>
                <dd className="eyebrow mt-3 text-stone">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

export default Philosophy
