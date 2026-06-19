import heroImage from '../../assets/contactImage1.jpg'

function ContactHero() {
  return (
    <section className="relative flex min-h-[72svh] items-end overflow-hidden bg-ink">
      <img
        src={heroImage}
        alt="A warm tropical veranda designed by TMAA, opening onto the forest"
        className="animate-kenburns absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/40" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pt-32 pb-16 md:px-10 lg:px-14 lg:pb-24">
        <div
          className="max-w-3xl"
          style={{ animation: 'fadeUp 1s ease 0.15s both' }}
        >
          <div className="eyebrow mb-6 flex items-center gap-4 text-bone/80">
            <span className="h-px w-10 bg-clay" />
            Contact — Get in touch
          </div>
          <h1 className="font-display text-[2.8rem] leading-[1.04] font-light text-bone sm:text-6xl lg:text-[5.5rem]">
            Let's start a
            <span className="text-stone-light italic"> conversation.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-bone/75 sm:text-lg">
            Whether it's a new home, a renovation, or simply an idea taking
            shape — we'd love to hear about your project, your site and the life
            you imagine within it.
          </p>
        </div>
      </div>

      <style>{`@keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }`}</style>
    </section>
  )
}

export default ContactHero
