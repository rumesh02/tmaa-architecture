import { Link } from 'react-router-dom'
import Reveal from '../common/Reveal'
import approachImage from '../../assets/homeImage3.jpg'

const services = [
  {
    index: '01',
    title: 'Architecture',
    body: 'Homes, retreats and public spaces designed from the climate up — passively cooled, naturally lit, built to endure.',
  },
  {
    index: '02',
    title: 'Interior Design',
    body: 'Calm, tactile interiors in timber, stone and linen that carry the architecture indoors with quiet warmth.',
  },
  {
    index: '03',
    title: 'Landscape & Courtyards',
    body: 'Gardens, water and planted courts woven through every plan, blurring the line between inside and out.',
  },
  {
    index: '04',
    title: 'Master Planning',
    body: 'Sensitive, site-led planning for estates and developments that respect the contours of the land.',
  },
]

function Approach() {
  return (
    <section className="bg-ink py-24 text-bone lg:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Sticky intro + image */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <div className="eyebrow flex items-center gap-4 text-stone-light">
                  <span className="h-px w-10 bg-clay" />
                  03 — What we do
                </div>
                <h2 className="mt-6 font-display text-4xl font-light sm:text-5xl lg:text-6xl">
                  A single studio, end to end
                </h2>
                <p className="mt-6 max-w-md leading-relaxed text-bone/60">
                  From the first sketch on site to the last detail of joinery,
                  we hold the whole vision — so every space resolves as one
                  coherent idea.
                </p>
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-10 overflow-hidden">
                  <img
                    src={approachImage}
                    alt="A warm tropical-modern living room by TMAA"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>

          {/* Service list */}
          <div className="lg:col-span-7">
            <div className="flex flex-col">
              {services.map((service, i) => (
                <Reveal key={service.title} delay={i * 60}>
                  <div className="group border-t border-bone/15 py-10 transition-colors duration-300 last:border-b hover:border-bone/40">
                    <div className="flex items-start gap-6 lg:gap-10">
                      <span className="font-display text-2xl text-stone-light">
                        {service.index}
                      </span>
                      <div>
                        <h3 className="font-display text-3xl font-light transition-colors duration-300 group-hover:text-clay lg:text-4xl">
                          {service.title}
                        </h3>
                        <p className="mt-4 max-w-lg leading-relaxed text-bone/55">
                          {service.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <Link
                to="/services"
                className="eyebrow group mt-12 inline-flex items-center gap-3 text-bone transition-colors hover:text-clay"
              >
                <span className="h-px w-8 bg-bone transition-all duration-300 group-hover:w-12 group-hover:bg-clay" />
                Explore our services
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Approach
