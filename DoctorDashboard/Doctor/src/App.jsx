import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DoctorDashboard from './page/DoctorDashboard'
import Navbar from './component/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
        <Navbar/>
        <DoctorDashboard/>
    </div>
  )
}

export default App
