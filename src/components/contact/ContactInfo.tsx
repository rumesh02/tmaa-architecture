import Reveal from '../common/Reveal'
import infoImage from '../../assets/contactImage2.jpg'
import logo from '../../assets/logo.jpg'

const socials = [
  { href: 'https://instagram.com', label: 'Instagram' },
  { href: 'https://www.linkedin.com', label: 'LinkedIn' },
  { href: 'https://www.behance.net', label: 'Behance' },
]

function ContactInfo() {
  return (
    <section className="bg-paper py-24 lg:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Image */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src={infoImage}
                    alt="An infinity pool framing the hills at a TMAA residence"
                    className="aspect-[4/5] w-full object-cover sm:aspect-[16/11]"
                  />
                </div>
                <span className="absolute -bottom-5 -left-5 hidden h-24 w-24 border-b border-l border-clay lg:block" />
              </div>
            </Reveal>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <Reveal>
              <div className="eyebrow flex items-center gap-4 text-stone">
                <span className="h-px w-10 bg-clay" />
                02 — Direct
              </div>
              <h2 className="mt-6 font-display text-4xl font-light text-ink sm:text-5xl">
                Prefer to reach us directly?
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-10 flex flex-col gap-8">
                <div>
                  <span className="eyebrow text-stone">Call us</span>
                  <a
                    href="tel:+94718745473"
                    className="mt-2 block font-display text-3xl font-light text-ink transition-colors duration-300 hover:text-clay lg:text-4xl"
                  >
                    071 874 5473
                  </a>
                </div>
                <div>
                  <span className="eyebrow text-stone">Email us</span>
                  <a
                    href="mailto:tmaaarchitects@gmail.com"
                    className="mt-2 block font-display text-3xl font-light break-all text-ink transition-colors duration-300 hover:text-clay lg:text-4xl"
                  >
                    tmaaarchitects@gmail.com
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8">
                <div>
                  <span className="eyebrow text-stone">Studio</span>
                  <p className="mt-2 leading-relaxed text-ink/70">Colombo, Sri Lanka</p>
                </div>
                <div>
                  <span className="eyebrow text-stone">Hours</span>
                  <p className="mt-2 leading-relaxed text-ink/70">Mon — Fri · 9am to 6pm</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-10 flex items-center gap-6">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="eyebrow text-ink/60 transition-colors duration-300 hover:text-clay"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={260}>
              <img
                src={logo}
                alt="TMAA Architects"
                className="mt-12 h-16 w-auto rounded-md opacity-90"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
