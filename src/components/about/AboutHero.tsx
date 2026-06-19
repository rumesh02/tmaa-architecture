import heroImage from '../../assets/aboutImage1.jpg'

const meta = [
  { label: 'Founded', value: '2012' },
  { label: 'Based in', value: 'Colombo, LK' },
  { label: 'Practice', value: 'Tropical Modern' },
]

function AboutHero() {
  return (
    <section className="grid min-h-[92svh] grid-cols-1 bg-ink text-bone lg:grid-cols-2">
      {/* Image */}
      <div className="relative order-1 min-h-[52svh] overflow-hidden lg:order-2 lg:min-h-0">
        <img
          src={heroImage}
          alt="TMAA founders with their award-winning Eco Lodge exhibition panel"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-ink/20 lg:bg-gradient-to-l" />
      </div>

      {/* Text */}
      <div
        className="order-2 flex flex-col justify-center px-6 pt-28 pb-16 md:px-10 lg:order-1 lg:px-14 lg:pt-32 lg:pb-24"
        style={{ animation: 'fadeUp 1s ease 0.15s both' }}
      >
        <div className="eyebrow flex items-center gap-4 text-stone-light">
          <span className="h-px w-10 bg-clay" />
          About — The Studio
        </div>

        <h1 className="mt-8 font-display text-[2.8rem] leading-[1.04] font-light sm:text-6xl lg:text-[5rem]">
          Shaped by the
          <span className="block text-stone-light italic">landscape we build in.</span>
        </h1>

        <p className="mt-8 max-w-md text-base leading-relaxed text-bone/70 sm:text-lg">
          TMAA Architects is a Colombo-based practice founded on a single
          belief - that the finest buildings begin by listening to their place,
          their climate and the people they are made for.
        </p>

        <dl className="mt-12 flex flex-wrap gap-x-12 gap-y-6 border-t border-bone/15 pt-8">
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="eyebrow text-stone-light">{item.label}</dt>
              <dd className="mt-2 font-display text-2xl font-light text-bone">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <style>{`@keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }`}</style>
    </section>
  )
}

export default AboutHero
