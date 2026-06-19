import Reveal from '../common/Reveal'
import storyImage from '../../assets/aboutImage4.jpg'

function StudioStory() {
  return (
    <section className="bg-bone py-24 lg:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Narrative */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="eyebrow flex items-center gap-4 text-stone">
                <span className="h-px w-10 bg-clay" />
                01 — Our Story
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-8 font-display text-3xl leading-[1.15] font-light text-ink sm:text-4xl lg:text-[3.2rem] lg:leading-[1.14]">
                We began with a question that still guides every project — how
                should a building <span className="text-clay italic">belong</span> to
                the tropics?
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <Reveal delay={140}>
                <p className="leading-relaxed text-ink/65">
                  Founded in Colombo, TMAA grew out of a shared fascination with
                  Sri Lanka's modernist tradition — buildings that breathe,
                  blur indoors and out, and grow more beautiful with age. We set
                  out to carry that language forward for a new generation.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="leading-relaxed text-ink/65">
                  Today the studio works across homes, retreats and landscapes,
                  but the method is unchanged: read the site, follow the light,
                  honour the climate, and detail with the hands of local
                  craft. The result is architecture that feels quietly
                  inevitable.
                </p>
              </Reveal>
            </div>

            <Reveal delay={240}>
              <figure className="mt-12 border-l-2 border-clay pl-6">
                <blockquote className="font-display text-2xl leading-snug font-light text-ink italic lg:text-3xl">
                  “We don't impose a style. We let the place write the brief.”
                </blockquote>
                <figcaption className="eyebrow mt-4 text-stone">
                  — The founders, TMAA
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Image */}
          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src={storyImage}
                    alt="TMAA's award-winning Eco Lodge exhibition panel"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-105"
                  />
                </div>
                <span className="absolute -top-5 -right-5 hidden h-24 w-24 border-t border-r border-clay lg:block" />
                <span className="eyebrow mt-4 block text-stone">
                  Eco Lodge — exhibited at SLIA Architect 2026
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudioStory
