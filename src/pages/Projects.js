import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Pricing from '../components/Pricing'
import Work from '../components/Work'

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="Projects" text="Some of my work."/>
      <Work/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default Projects
