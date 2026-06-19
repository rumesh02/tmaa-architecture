import AboutHero from '../components/about/AboutHero'
import StudioStory from '../components/about/StudioStory'
import Values from '../components/about/Values'
import TeamSection from '../components/about/TeamSection'
import Recognition from '../components/about/Recognition'
import ContactCTA from '../components/home/ContactCTA'

function About() {
  return (
    <main>
      <AboutHero />
      <StudioStory />
      <Values />
      <TeamSection />
      <Recognition />
      <ContactCTA index="05" />
    </main>
  )
}

export default About
