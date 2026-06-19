import { Link } from 'react-router-dom'
import Reveal from '../common/Reveal'

function ContactCTA({ index = '04' }: { index?: string }) {
  return (
    <section className="bg-bone py-24 lg:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <Reveal>
          <div className="eyebrow flex items-center gap-4 text-stone">
            <span className="h-px w-10 bg-clay" />
            {index} — Let's begin
          </div>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-end">
          <Reveal delay={80} className="lg:col-span-8">
            <h2 className="font-display text-[2.6rem] leading-[1.05] font-light text-ink sm:text-6xl lg:text-[5rem]">
              Let's create something
              <span className="block text-clay italic">timeless together.</span>
            </h2>
          </Reveal>

          <Reveal delay={160} className="lg:col-span-4">
            <p className="max-w-sm leading-relaxed text-ink/65">
              Every great building starts with a conversation. Tell us about
              your site, your story and the life you want to live within it.
            </p>
            <Link
              to="/contact"
              className="eyebrow group mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-bone transition-colors duration-300 hover:bg-clay"
            >
              Start a project
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
