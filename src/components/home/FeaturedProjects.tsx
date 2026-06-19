import { Link } from 'react-router-dom'
import Reveal from '../common/Reveal'
import project1 from '../../assets/homeImage2.jpg'
import project2 from '../../assets/homeImage1.jpg'
import project3 from '../../assets/homeImage4.jpg'

type Project = {
  index: string
  title: string
  location: string
  year: string
  category: string
  image: string
}

const projects: Project[] = [
  {
    index: '01',
    title: 'Serai Villa',
    location: 'Galle, Sri Lanka',
    year: '2024',
    category: 'Residential',
    image: project1,
  },
  {
    index: '02',
    title: 'The Canopy House',
    location: 'Kandy, Sri Lanka',
    year: '2023',
    category: 'Residential',
    image: project2,
  },
  {
    index: '03',
    title: 'Courtyard Pavilion',
    location: 'Bentota, Sri Lanka',
    year: '2022',
    category: 'Landscape & Interior',
    image: project3,
  },
]

function ProjectRow({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <Reveal>
      <Link
        to="/projects"
        className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
      >
        {/* Image */}
        <div className={`lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="aspect-[16/10] w-full object-cover transition-transform duration-[1.3s] ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15" />
            <span className="eyebrow absolute bottom-5 left-5 translate-y-3 rounded-full bg-bone/90 px-5 py-2.5 text-ink opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              View project →
            </span>
          </div>
        </div>

        {/* Meta */}
        <div className={`lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
          <span className="font-display text-2xl text-stone-light">{project.index}</span>
          <h3 className="mt-3 font-display text-4xl font-light text-ink transition-colors duration-300 group-hover:text-clay lg:text-5xl">
            {project.title}
          </h3>
          <div className="mt-6 flex flex-wrap gap-x-10 gap-y-3 border-t border-line pt-6">
            <div>
              <span className="eyebrow block text-stone">Location</span>
              <span className="mt-1 block text-sm text-ink/80">{project.location}</span>
            </div>
            <div>
              <span className="eyebrow block text-stone">Year</span>
              <span className="mt-1 block text-sm text-ink/80">{project.year}</span>
            </div>
            <div>
              <span className="eyebrow block text-stone">Discipline</span>
              <span className="mt-1 block text-sm text-ink/80">{project.category}</span>
            </div>
          </div>
        </div>
      </Link>
    </Reveal>
  )
}

function FeaturedProjects() {
  return (
    <section className="bg-paper py-24 lg:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="eyebrow flex items-center gap-4 text-stone">
                <span className="h-px w-10 bg-clay" />
                02 — Selected Works
              </div>
              <h2 className="mt-6 font-display text-4xl font-light text-ink sm:text-5xl lg:text-6xl">
                A portfolio of place
              </h2>
            </div>
            <Link
              to="/projects"
              className="eyebrow group inline-flex items-center gap-3 text-ink transition-colors hover:text-clay"
            >
              All projects
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-20 lg:mt-24 lg:gap-28">
          {projects.map((project, i) => (
            <ProjectRow key={project.title} project={project} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
