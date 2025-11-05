import React from 'react'
import AboutHero from '../component/about/AboutHero'
import AboutStory from '../component/about/AboutStory'
import AboutValues from '../component/about/AboutValues'
import AboutPackaging from '../component/about/AboutPackaging'
import AboutTeam from '../component/about/AboutTeam'
import AboutCTA from '../component/about/AboutCTA'


const About = () => {
  return (
    <div className="overflow-hidden">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutPackaging />
      <AboutTeam />
      <AboutCTA />
    </div>
  )
}

export default About