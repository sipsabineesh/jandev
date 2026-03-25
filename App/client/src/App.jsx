import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Routes, Route, useLocation } from 'react-router-dom'
import { assets } from './assets/assets'

const App = () => {
  const [loading, setLoading] = useState(true);
  const isSellerPath = useLocation().pathname.includes("seller")

  useEffect(() => {
    setTimeout(() => setLoading(false), 700); 
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <img src={assets.logo} className="w-20" alt="logo" />
      </div>
    )
  }

  return (
    <div>
      
      {isSellerPath ? null :  <Navbar/>} 
     
      <div className={`${isSellerPath ? "" : 'px-6 md:px-16 lg:px-24 xl:px-32'}`}>
       <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      </div>
        { !isSellerPath && <Footer/> }
    </div>
  )
}

export default App