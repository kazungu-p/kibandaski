import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className="app">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<PlaceOrder />} />
          </Routes>
        </Router>
      </div>
      <Footer/>
    </>
  )
}

export default App
