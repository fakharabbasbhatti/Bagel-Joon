import React from 'react'
import Hero from '../component/home/Hero'
import FeaturedPackaging from '../component/home/FeaturedPackaging'
import DesignPhilosophy from '../component/home/DesignPhilosophy'
import CTASection from '../component/home/CTASection'

const Home = () => {
  return (
    <div>
      <Hero/>
      <FeaturedPackaging/>
      <DesignPhilosophy/>
      <CTASection/>
    </div>
  )
}

export default Home
