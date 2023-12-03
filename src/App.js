import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import ImageGenerationForm from './components/Generate'
import { Home } from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
<main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
      <div className='container'>
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/generate' element={<ImageGenerationForm/>} />
          <Route path='/login' element={<Login />} />
        </Routes>
        </div>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App