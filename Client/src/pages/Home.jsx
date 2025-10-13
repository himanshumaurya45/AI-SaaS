import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AiTools from '../components/AiTools'
import Plan from '../components/Plan'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <AiTools/>
        <Plan/>
    </div>
  )
}

export default Home