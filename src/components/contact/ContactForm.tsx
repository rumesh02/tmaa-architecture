import { useState, type FormEvent } from 'react'
import Reveal from '../common/Reveal'

const STUDIO_EMAIL = 'tmaaarchitects@gmail.com'

const projectTypes = [
  'New home',
  'Interior design',
  'Landscape & courtyard',
  'Renovation / extension',
  'Commercial / hospitality',
  'Something else',
]

const checklist = [
  'Where your site is — and a little about it',
  'The kind of spaces you imagine',
  'Your rough timeline and budget',
]

const inputClass =
  'peer w-full border-b border-line bg-transparent pt-7 pb-3 text-ink placeholder-transparent transition-colors duration-300 focus:border-clay focus:outline-none'
const labelClass =
  'eyebrow pointer-events-none absolute left-0 top-0 text-stone transition-all duration-300 peer-placeholder-shown:top-7 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-placeholder-shown:text-ink/40 peer-focus:top-0 peer-focus:text-[0.7rem] peer-focus:uppercase peer-focus:tracking-[0.28em] peer-focus:text-clay'

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = `New enquiry — ${form.name || 'Website'}${form.type ? ` · ${form.type}` : ''}`
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Project type: ${form.type}`,
      '',
      form.message,
    ].join('\n')
    window.location.href = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section className="bg-bone py-24 lg:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Intro */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="eyebrow flex items-center gap-4 text-stone">
                <span className="h-px w-10 bg-clay" />
                01 — Enquiry
              </div>
              <h2 className="mt-8 font-display text-4xl font-light text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
                Tell us about your project
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-ink/65">
                Share a few details and we'll be in touch within two business
                days to arrange a conversation. It helps to know:
              </p>
            </Reveal>

            <Reveal delay={120}>
              <ul className="mt-8 flex flex-col gap-4">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-ink/70">
                    <span className="mt-2.5 h-px w-6 shrink-0 bg-clay" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal delay={80}>
              {sent ? (
                <div className="flex h-full min-h-[420px] flex-col items-start justify-center border-t border-line">
                  <span className="font-display text-6xl text-clay">✓</span>
                  <h3 className="mt-6 font-display text-3xl font-light text-ink lg:text-4xl">
                    Thank you — your message is on its way.
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-ink/65">
                    Your email client should now be open with the details
                    prefilled. If it didn't, write to us directly at{' '}
                    <a href={`mailto:${STUDIO_EMAIL}`} className="text-ink underline decoration-clay underline-offset-4">
                      {STUDIO_EMAIL}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="eyebrow group mt-10 inline-flex items-center gap-3 text-ink transition-colors hover:text-clay"
                  >
                    <span className="h-px w-8 bg-ink transition-all duration-300 group-hover:w-12 group-hover:bg-clay" />
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                  <div className="grid gap-10 sm:grid-cols-2">
                    <div className="relative">
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Name"
                        value={form.name}
                        onChange={(e) => update('name')(e.target.value)}
                        className={inputClass}
                      />
                      <label htmlFor="name" className={labelClass}>Full name</label>
                    </div>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => update('email')(e.target.value)}
                        className={inputClass}
                      />
                      <label htmlFor="email" className={labelClass}>Email</label>
                    </div>
                    <div className="relative">
                      <input
                        id="phone"
                        type="tel"
                        placeholder="Phone"
                        value={form.phone}
                        onChange={(e) => update('phone')(e.target.value)}
                        className={inputClass}
                      />
                      <label htmlFor="phone" className={labelClass}>Phone (optional)</label>
                    </div>
                    <div className="relative">
                      <select
                        id="type"
                        value={form.type}
                        onChange={(e) => update('type')(e.target.value)}
                        className="w-full appearance-none border-b border-line bg-transparent pt-7 pb-3 text-ink transition-colors duration-300 focus:border-clay focus:outline-none"
                      >
                        <option value="" disabled>
                          Select a type
                        </option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <label
                        htmlFor="type"
                        className="eyebrow pointer-events-none absolute top-0 left-0 text-stone"
                      >
                        Project type
                      </label>
                      <span className="pointer-events-none absolute right-1 bottom-3 text-stone">↓</span>
                    </div>
                  </div>

                  <div className="relative">
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Message"
                      value={form.message}
                      onChange={(e) => update('message')(e.target.value)}
                      className={`${inputClass} resize-none`}
                    />
                    <label htmlFor="message" className={labelClass}>Tell us about your project</label>
                  </div>

                  <button
                    type="submit"
                    className="eyebrow group inline-flex w-fit items-center gap-3 rounded-full bg-ink px-9 py-4 text-bone transition-colors duration-300 hover:bg-clay"
                  >
                    Send enquiry
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
