import React from 'react';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from "react-router-dom"
import Analytics from './pages/Analytics';

const App = () => {

  

  return (
    <div className=''>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/analytics/:id' element={<Analytics />} />
      </Routes>
    </div>
  )
}

export default App