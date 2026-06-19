import Reveal from '../common/Reveal'

const values = [
  {
    index: '01',
    title: 'Site first',
    body: 'Every design begins on the ground — tracing contours, trees, views and the path of the sun before a single line is drawn.',
  },
  {
    index: '02',
    title: 'Climate-led',
    body: 'We design for the tropics: cross-ventilation, deep shade and daylight, so spaces stay cool and calm without leaning on machinery.',
  },
  {
    index: '03',
    title: 'Crafted by hand',
    body: 'Local materials and local makers. Timber, stone and lime detailed honestly, so the craft of building is part of the beauty.',
  },
  {
    index: '04',
    title: 'Built to last',
    body: 'We design for decades, not trends — buildings that weather gracefully and belong to their place for a lifetime.',
  },
]

function Values() {
  return (
    <section className="bg-ink py-24 text-bone lg:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <Reveal>
          <div className="max-w-2xl">
            <div className="eyebrow flex items-center gap-4 text-stone-light">
              <span className="h-px w-10 bg-clay" />
              02 — How we work
            </div>
            <h2 className="mt-6 font-display text-4xl font-light sm:text-5xl lg:text-6xl">
              Four ideas, in everything we make
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-bone/12 bg-bone/12 sm:grid-cols-2 lg:mt-20">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 70}>
              <div className="group h-full bg-ink p-8 transition-colors duration-300 hover:bg-charcoal lg:p-12">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-2xl text-stone-light">{value.index}</span>
                  <span className="h-px w-10 bg-clay opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <h3 className="mt-6 font-display text-3xl font-light transition-colors duration-300 group-hover:text-clay lg:text-4xl">
                  {value.title}
                </h3>
                <p className="mt-4 leading-relaxed text-bone/55">{value.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values
