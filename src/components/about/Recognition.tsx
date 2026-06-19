import Reveal from '../common/Reveal'
import awardImage from '../../assets/aboutImage3.jpg'

const awards = [
  {
    year: '2026',
    title: 'Award of Merit — Most Informative Display Panel',
    body: 'SLIA Architect 2026 Exhibition · Sri Lanka Institute of Architects',
  },
  {
    year: '2026',
    title: 'Award of Merit — Most Attractive Display Panel',
    body: 'SLIA Architect 2026 Exhibition · Sri Lanka Institute of Architects',
  },
  {
    year: '2026',
    title: 'Selected Exhibitor — “Transform in Time”',
    body: 'Architect 2026 · Sri Lanka Institute of Architects',
  },
  {
    year: '—',
    title: 'Eco Lodge',
    body: 'Tropical hospitality concept · Exhibited design',
  },
]

function Recognition() {
  return (
    <section className="bg-ink py-24 text-bone lg:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* List */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="eyebrow flex items-center gap-4 text-stone-light">
                <span className="h-px w-10 bg-clay" />
                04 — Recognition
              </div>
              <h2 className="mt-6 font-display text-4xl font-light sm:text-5xl lg:text-6xl">
                Honoured for the work
              </h2>
            </Reveal>

            <div className="mt-12 flex flex-col">
              {awards.map((award, i) => (
                <Reveal key={award.title} delay={i * 60}>
                  <div className="group grid grid-cols-[auto_1fr] gap-6 border-t border-bone/15 py-7 transition-colors duration-300 last:border-b hover:border-bone/40 lg:gap-10">
                    <span className="font-display text-2xl text-stone-light">{award.year}</span>
                    <div>
                      <h3 className="font-display text-2xl font-light transition-colors duration-300 group-hover:text-clay lg:text-[1.75rem]">
                        {award.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-bone/55">{award.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <div className="lg:sticky lg:top-32">
                <div className="overflow-hidden">
                  <img
                    src={awardImage}
                    alt="Award of Merit certificates from the Sri Lanka Institute of Architects"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <span className="eyebrow mt-4 block text-stone-light">
                  Award of Merit · SLIA Architect 2026
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Recognition
