import Hero from '../components/home/Hero'
import Philosophy from '../components/home/Philosophy'
import FeaturedProjects from '../components/home/FeaturedProjects'
import Statement from '../components/home/Statement'
import Approach from '../components/home/Approach'
import ContactCTA from '../components/home/ContactCTA'

function Home() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <FeaturedProjects />
      <Statement />
      <Approach />
      <ContactCTA />
    </main>
  )
}

export default Home
