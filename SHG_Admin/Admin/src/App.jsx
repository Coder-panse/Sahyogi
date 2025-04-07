import { useState } from 'react'
import AdminDashboard from './component/AdminDashboard'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import SignupForm from './component/SignupForm'
import LoginForm from './component/LoginForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className='mx-10 sm:mx-[10%]'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<AdminDashboard/>}/>
          <Route path='/signup' element={<SignupForm/>}/>
          <Route path='/login' element={<LoginForm/>}/>
        </Routes>
      </div>
    
  )
}

export default App
