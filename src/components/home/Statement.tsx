import Reveal from '../common/Reveal'
import statementImage from '../../assets/homeImage4.jpg'

function Statement() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-ink">
      {/* Fixed-attachment parallax backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${statementImage})` }}
      />
      <div className="absolute inset-0 bg-ink/65" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-28 text-center md:px-10">
        <Reveal>
          <span className="eyebrow text-bone/60">Our philosophy</span>
        </Reveal>
        <Reveal delay={100}>
          <blockquote className="mt-8 font-display text-3xl leading-[1.25] font-light text-bone italic sm:text-4xl lg:text-[3.5rem] lg:leading-[1.2]">
            “Good architecture is quiet. It lets the light, the rain and the
            garden do the speaking.”
          </blockquote>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-clay" />
            <span className="eyebrow text-bone/70">TMAA Architects</span>
            <span className="h-px w-10 bg-clay" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Statement
