import React from 'react'

import Home from './Pages/Landing/Home'
import Footer from './components/LandingComponent/Footer'
import { Route, Routes } from 'react-router-dom'
import HealthHome from './Pages/Healthcare/HealthHome'
import Doctors from './Pages/Healthcare/Doctors'
import Appointment from './Pages/Healthcare/Appointment'
import Navbar from './components/LandingComponent/Navbar'
import PatientForm from './components/HealthComponent/PatientForm'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import DoctorAppointmentForm from './components/HealthComponent/DoctorAppointmentForm'
import LogisticHome from './Pages/Logistic/LogisticHome'
import RentalSelection from './components/Logistic/RentalSelection'
import Rentpage from './components/Logistic/Rentpage'




const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/healthcare' element={<HealthHome/>} />
          <Route path="/doctor" element={<Doctors />} />
          <Route path="/patientform" element={<PatientForm/>}/>
          <Route path="/doctor/:speciality" element={<Doctors />} />
          <Route path="/appointment/:docId" element={<Appointment />} />
          <Route path='/signup' element={<SignupForm/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/appointmentform' element={<DoctorAppointmentForm/>}/>
          <Route path='/logistic' element={<LogisticHome/>}/>
          <Route path='/rentalservice' element={<RentalSelection/>}/>
          <Route  path='/rentpage' element={<Rentpage/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
