function ServicesList() {
  return (
    <section className="bg-bone px-6 pt-36 pb-24 md:px-10 lg:px-14 lg:pt-44 lg:pb-32">
      <div
        className="mx-auto max-w-5xl"
        style={{ animation: 'fadeUp 1s ease 0.1s both' }}
      >
        <div className="eyebrow flex items-center gap-4 text-stone">
          <span className="h-px w-10 bg-clay" />
          What We Do
        </div>

        <h1 className="mt-8 font-display text-[2.8rem] leading-[1.04] font-light sm:text-6xl lg:text-[5rem]">
          Services
          <span className="block text-stone italic">from sketch to site.</span>
        </h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
          A complete architectural practice - guiding every project from first
          concept through design, detailing and construction.
        </p>
      </div>

      <style>{`@keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }`}</style>
    </section>
  )
}

export default ServicesList
