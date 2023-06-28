import React from 'react'
import Header from 'parts/Header'
import Hero from 'parts/Hero'
import landingPage from 'json/landingPage.json';

function LandingPage() {
  return (
    <>
        <Header></Header>
        <Hero data={landingPage.hero} />
    </>
  )
}

export default LandingPage