import React,  { Suspense, lazy } from 'react'
import Loader from '../components/Loader'
const MainBanner = lazy(() => import('../components/MainBanner'))
const Services = lazy(() => import('../components/Services'))
const Contact = lazy(() => import('../components/Contact'))
const BottomBanner = lazy(() => import('../components/BottomBanner'))
// import MainBanner from '../components/MainBanner'
// import Contact from '../components/Contact'
// import BottomBanner from '../components/BottomBanner'
// import Services from '../components/Services'

const Home = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <div className="animate-fadeIn">
        <MainBanner/>
        <Services/>
        <Contact/>
        <BottomBanner/>
      </div>
    </Suspense>
  )
}

export default Home