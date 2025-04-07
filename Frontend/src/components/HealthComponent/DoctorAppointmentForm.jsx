import React, { useState } from 'react';

const DoctorAppointmentForm = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    patientAge: '',
    patientGender: '',
    patientContact: '',
    patientAddress: '',
    appointmentDate: '',
    appointmentTime: '',
  });

  const [errors, setErrors] = useState({});

  // Available time slots - replace with actual availability from your backend
  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM'
  ];

  const validateForm = () => {
    let tempErrors = {};
    
    // Patient information validation
    if (!formData.patientName.trim()) tempErrors.patientName = 'Patient name is required';
    if (!formData.patientAge) tempErrors.patientAge = 'Patient age is required';
    if (!formData.patientGender) tempErrors.patientGender = 'Patient gender is required';
    if (!formData.patientContact.trim()) tempErrors.patientContact = 'Contact number is required';
    
    // Appointment details validation
    if (!formData.appointmentDate) tempErrors.appointmentDate = 'Appointment date is required';
    if (!formData.appointmentTime) tempErrors.appointmentTime = 'Appointment time is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission here
      console.log('Appointment form submitted:', formData);
    }
  };

  // Get today's date in YYYY-MM-DD format for min date attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-gradient-to-br py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header with gradient background */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-8 text-center">
            <h2 className="text-3xl font-bold text-white">Doctor's Appointment</h2>
            <p className="mt-2 text-blue-100">Schedule your visit with our healthcare professionals</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8">
            {/* Patient Information Section */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-800">Patient Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="patientName"
                      name="patientName"
                      value={formData.patientName}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.patientName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.patientName && <p className="mt-1 text-sm text-red-500">{errors.patientName}</p>}
                </div>
                
                <div className="relative">
                  <label htmlFor="patientAge" className="block text-sm font-medium text-gray-700 mb-1">Age *</label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <input
                      type="number"
                      id="patientAge"
                      name="patientAge"
                      min="0"
                      max="120"
                      value={formData.patientAge}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.patientAge ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your age"
                    />
                  </div>
                  {errors.patientAge && <p className="mt-1 text-sm text-red-500">{errors.patientAge}</p>}
                </div>
                
                <div className="relative">
                  <label htmlFor="patientGender" className="block text-sm font-medium text-gray-700 mb-1">Gender *</label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <select
                      id="patientGender"
                      name="patientGender"
                      value={formData.patientGender}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.patientGender ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  {errors.patientGender && <p className="mt-1 text-sm text-red-500">{errors.patientGender}</p>}
                </div>
                
                <div className="relative">
                  <label htmlFor="patientContact" className="block text-sm font-medium text-gray-700 mb-1">Contact Number *</label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      id="patientContact"
                      name="patientContact"
                      value={formData.patientContact}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.patientContact ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your contact number"
                    />
                  </div>
                  {errors.patientContact && <p className="mt-1 text-sm text-red-500">{errors.patientContact}</p>}
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="patientAddress" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute top-3 left-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <textarea
                      id="patientAddress"
                      name="patientAddress"
                      rows="2"
                      value={formData.patientAddress}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your address"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Appointment Details Section */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 bg-indigo-100 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-800">Appointment Details</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 mb-1">Appointment Date *</label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="date"
                      id="appointmentDate"
                      name="appointmentDate"
                      min={today}
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.appointmentDate ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                  </div>
                  {errors.appointmentDate && <p className="mt-1 text-sm text-red-500">{errors.appointmentDate}</p>}
                </div>
                
                <div className="relative">
                  <label htmlFor="appointmentTime" className="block text-sm font-medium text-gray-700 mb-1">Appointment Time *</label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <select
                      id="appointmentTime"
                      name="appointmentTime"
                      value={formData.appointmentTime}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.appointmentTime ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select Time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                  {errors.appointmentTime && <p className="mt-1 text-sm text-red-500">{errors.appointmentTime}</p>}
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                className="group relative w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-md shadow-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300 group-hover:text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                Schedule Appointment
              </button>
            </div>
          </form>
        </div>
        
        {/* Footer with additional info */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>By scheduling an appointment, you agree to our <a href="#" className="text-blue-600 hover:text-blue-800">Terms of Service</a> and <a href="#" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointmentForm; 