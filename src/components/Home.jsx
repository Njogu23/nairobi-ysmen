import React from 'react'
import Hero from './Hero/Hero'
import NewsSection from './News/NewsCard'
import OurWork from './OurWork/OurWork'
import Intro from './Intro/Intro'
import CallToAction from './CallToAction/CallToAction'

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <NewsSection />
      <OurWork />
      <CallToAction />
    </>
  )
}
