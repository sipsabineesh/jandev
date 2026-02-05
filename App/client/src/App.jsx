import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Routes, Route, useLocation } from 'react-router-dom'

const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller")

  return (
    <div>
      {isSellerPath ? null :  <Navbar/>} 
     
      <div className={`${isSellerPath ? "" : 'px-6 md:px-16 lg:px-24 xl:px-32'}`}>
       <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      </div>
        { !isSellerPath && <Footer/> }
    </div>
  )
}

export default App