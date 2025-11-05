import React from 'react'
import Hero from '../component/services/Hero'
import { PackagingTypes } from '../component/services/PackagingTypes'
import { BrandValues } from '../component/services/BrandValues'
import { Testimonials } from '../component/services/Testimonials'


const Services = () => {
  return (
    <div>
 <Hero/>
 <PackagingTypes/>
 <BrandValues/>
 <Testimonials/>
    </div>
  )
}

export default Services