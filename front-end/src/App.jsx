import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Footer from './components/Footer'
import Modal from './components/Modal'

function App() {

  const[modalOpen, setModalOpen] = useState(false);

  return (
    <>
    {modalOpen? <Modal setModalOpen={setModalOpen}/> : <></>}
      <div className="app">
        <Router>
          <Navbar setModalOpen={setModalOpen} />
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
