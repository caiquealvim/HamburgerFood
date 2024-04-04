import React from 'react'
import Hero from './hero/Hero'
import Options from './options/Options'
import BestBurguer from './BestFood/bestBurguer'
import Team from './team/team'
import Email from './email/Email'
import Footer from './footer/footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Options/>
      <BestBurguer/>
      <Team/>
      <Email/>
      <Footer/>
    </div>
  )
}

export default Home