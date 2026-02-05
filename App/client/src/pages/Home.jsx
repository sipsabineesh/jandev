import React from 'react'
import MainBanner from '../components/MainBanner'
import Contact from '../components/Contact'
import BottomBanner from '../components/BottomBanner'
import Services from '../components/Services'

const Home = () => {
  return (
    <div>
        <MainBanner/>
        <Services/>
        <Contact/>
        <BottomBanner/>
    </div>
  )
}

export default Home