import Reveal from '../common/Reveal'
import foundersImage from '../../assets/aboutImage2.jpg'

const founders = [
  {
    name: 'Thilanka Suraweera',
    role: 'Co-founder · Principal Architect',
    bio: 'Thilanka leads design and direction at TMAA, with a focus on site strategy and the architecture of climate. His tropical residential work has been recognised by the Sri Lanka Institute of Architects.',
  },
  {
    name: 'Nelshika Gunathilaka',
    role: 'Co-founder · Architect',
    bio: "Nelshika shapes the studio's interiors and material language, bringing a tactile, detail-led sensibility to every space — from joinery and light to the planting of a courtyard.",
  },
]

function TeamSection() {
  return (
    <section className="bg-paper py-24 lg:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Image */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src={foundersImage}
                    alt="TMAA founders Thilanka Suraweera and Nelshika Gunathilaka"
                    className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
                  />
                </div>
                <span className="absolute -bottom-5 -left-5 hidden h-24 w-24 border-b border-l border-clay lg:block" />
              </div>
            </Reveal>
          </div>

          {/* Founders */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <Reveal>
              <div className="eyebrow flex items-center gap-4 text-stone">
                <span className="h-px w-10 bg-clay" />
                03 — The People
              </div>
              <h2 className="mt-6 font-display text-4xl font-light text-ink sm:text-5xl lg:text-6xl">
                Led by two founders
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-ink/65">
                TMAA is a deliberately small studio — close to every drawing and
                every site. It is led by two architects who share one
                sensibility and a hands-on way of working.
              </p>
            </Reveal>

            <div className="mt-10 flex flex-col">
              {founders.map((person, i) => (
                <Reveal key={person.name} delay={i * 80}>
                  <div className="border-t border-line py-8 last:border-b">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-2xl font-light text-ink lg:text-3xl">
                        {person.name}
                      </h3>
                      <span className="eyebrow text-clay">{person.role}</span>
                    </div>
                    <p className="mt-4 max-w-xl leading-relaxed text-ink/65">{person.bio}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
