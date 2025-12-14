import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route></Route>
        </Routes>
        <Footer/>
    </Router>
    </>
  )
}

export default App
