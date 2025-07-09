
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Review from './components/Review'
import Menu from './components/Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>


      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<Hero />} />
          <Route path='/menu' element={<Menu/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>



    </>
  )
}

export default App
