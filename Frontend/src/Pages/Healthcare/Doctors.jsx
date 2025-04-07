import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'



const Doctors = () => {
  const {speciality}=useParams()
  const {value}=useContext(AppContext)
  const [filterDoc,setFilterDoc]=useState([])
  const [showfilter,setShowFilter]=useState()
  const navigate=useNavigate()
 
  const applyfilterDoc=()=>{
    if(speciality) {
      setFilterDoc(value.filter(doc => doc.spec === speciality));
    }
    else{
      setFilterDoc(value)
    }
  }

  useEffect(()=>{
  
    applyfilterDoc()
  },[value,speciality])

  return (
    <div>


      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-16 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showfilter?"bg-blue-500 text-white":''}`} onClick={()=>setShowFilter(prev=>!prev)}>Filter</button>
        <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showfilter ? "flex" : "hidden sm:flex"}`}>
          <p onClick={()=>speciality==='General physician'? navigate('/doctor'):navigate('/doctor/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="General physician" ? "bg-indigo-100 text-black":""}`}>General physician</p>
          <p onClick={()=>speciality==='Dermatologist'? navigate('/doctor'):navigate('/doctor/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Dermatologist" ? "bg-indigo-100 text-black":""}`}>Dermatologist</p>
          <p onClick={()=>speciality==='Gynecologist'? navigate('/doctor'):navigate('/doctor/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Gynecologist" ? "bg-indigo-100 text-black":""}`}>Gynecologist</p>
          <p onClick={()=>speciality==='Pediatricians'? navigate('/doctor'):navigate('/doctor/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Pediatricians" ? "bg-indigo-100 text-black":""}`}>Pediatricians</p>
          <p onClick={()=>speciality==='Neurologist'? navigate('/doctor'):navigate('/doctor/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Neurologist" ? "bg-indigo-100 text-black":""}`}>Neurologist</p>
        </div>

        <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 flex-wrap justify-center gap-y-6 px-3 sm:px-0">
          {
          
          filterDoc.map((item, index) => (

            <div

              onClick={() => {
                navigate(`/appointment/${item._id}`);
              }}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              {/* FIX: Wrap the image in a div with a fixed height */}
              <div className="w-full h-40 bg-blue-50 flex items-center justify-center">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 rounded-full bg-green-500"></p>
                  <p>{item.available}</p>
                </div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm font-light">{item.spec}</p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  )

}


export default Doctors


