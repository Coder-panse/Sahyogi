import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'



const Appointment = () => {

  const {docId}=useParams()
  const navigate=useNavigate()
  const {value}=useContext(AppContext)

  const [docSlots,setDocSlots]=useState([])
  const [slotIndex,setSlotIndex]=useState(0)
  const [slotTime,setSlotTime]=useState('')
  const [docInfo,setdocInfo]=useState(null)

  const fetchInfo=async()=>{
    const docInfo=value.find(doc=>doc._id===docId)
    setdocInfo(docInfo)
    
  }

  useEffect(()=>{
    fetchInfo()
  },[value,docId])


  return docInfo && (
    <div>
  
        <div className='flex flex-col sm:flex-row gap-4 h-[350px] mb-20'>
          <div className='h-[350px]'>
            <img className='bg-blue-500 w-full sm:max-w-72 rounded-lg h-full object-cover' src={docInfo.image} alt="" />
          </div>

          <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white  mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
            <p className=' text-2xl font-medium text-gray-900'>{docInfo.name}</p>

            <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
              <p>{docInfo.degree}-{docInfo.spec}</p>
              <button className='py-0.5 px-2 border-2 text-xs rounded-full'>{docInfo.experience}</button>
            </div>

            <div className='text-sm font-medium text-gray-900 mt-3'>
              <p>About :</p>
              <p className='text-gray-500 max-w=[700px] mt-1'> {docInfo.about}</p>
            </div>

            <p className='text-sm mt-4 font-medium text-gray-800'>Appointment fees : {docInfo.fees}</p>

            <button onClick={()=>{navigate('/appointmentform');scrollTo(0,0)}} className='bg-blue-500 px-6 py-2 rounded-full outline-none border-none text-white font-medium  mt-5'>Book Appointment</button>
          </div>


        </div>
    </div>
  )
}

export default Appointment