
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Review from './components/Review'
import Menu from './components/Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import OfferCard from './components/OfferCard'
import About from './components/About'

function App() {

  return (
    <>


      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<Hero />} />
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/specials' element={<Banner/>}/>
           <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>



    </>
  )
}

export default App
