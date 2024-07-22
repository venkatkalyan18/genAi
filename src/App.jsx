import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TextInput from './components/TextInput'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Tester from './contexts/Tester'


export default function App() {
  return (
    <div className='bg-white'>
      <BrowserRouter>
      <div className='max-lg:pb-[75px] pb-[90px]'>
      <Navbar />
      </div>
        <Routes>
          <Route path='/' element={<Tester/>}/>
          <Route path='/textinput' element={<TextInput/>}/>
          <Route path='/login' element={<LoginForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}