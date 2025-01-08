import React from 'react'
import Hero from './components/Hero'
import EchoCounter from './components/EchoCounter'
import TestimonialSlider from './components/TestimonialSlider'
import Faq from './components/Faq'
import Footer from './components/Footer'
import BackToTop from './common/BackToTop'

const App = () => {
  return (
    <>
      <Hero />
      <EchoCounter />
      <TestimonialSlider />
      <Faq />
      <Footer />
      <BackToTop/>
    </>
  )
}

export default App