import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Rentpage = () => {
  const navigate = useNavigate()
  const [selectedBillType, setSelectedBillType] = useState('daily')
  
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <div className="mb-6">
        <button 
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() => navigate(-1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Item Details Card */}
        <div className="w-full lg:w-2/3 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img 
                src="tractor.png" 
                alt="Tractor" 
                className="w-full h-auto object-contain"
              />
            </div>
            
            {/* Details */}
            <div className="p-6 w-full md:w-1/2">
              <div className="mb-4">
                <h1 className="text-2xl font-bold text-gray-900">Tractor</h1>
                <p className="mt-1 text-gray-600">
                  <span className="font-medium">Type:</span> Machinery
                </p>
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-700">
                  <span className="font-medium">Description:</span> High-capacity pump for irrigation systems.
                </p>
                
                <div className="flex items-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Available
                  </span>
                </div>
                
                <p className="text-gray-700">
                  <span className="font-medium">Price:</span> ₹450/day
                </p>
                
                <div className="pt-4">
                  <button className="w-full sm:w-auto bg-blue-600 text-white font-medium rounded-md px-6 py-3 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bill Type Card */}
        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Billing Options</h2>
          
          <div className="space-y-4">
            <div className="border rounded-lg overflow-hidden">
              <div 
                className={`p-4 cursor-pointer transition-colors duration-200 ${
                  selectedBillType === 'daily' ? 'bg-blue-50 border-blue-500' : 'border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedBillType('daily')}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-900">Daily Rental</h3>
                    <p className="text-sm text-gray-500">Pay per day</p>
                  </div>
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedBillType === 'daily' ? 'border-blue-500' : 'border-gray-300'
                    }`}>
                      {selectedBillType === 'daily' && (
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-right">
                  <span className="font-bold text-gray-900">₹450/day</span>
                </div>
              </div>
              
              <div 
                className={`p-4 cursor-pointer transition-colors duration-200 ${
                  selectedBillType === 'weekly' ? 'bg-blue-50 border-blue-500' : 'border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedBillType('weekly')}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-900">Weekly Rental</h3>
                    <p className="text-sm text-gray-500">Pay for 7 days</p>
                  </div>
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedBillType === 'weekly' ? 'border-blue-500' : 'border-gray-300'
                    }`}>
                      {selectedBillType === 'weekly' && (
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-right">
                  <span className="font-bold text-gray-900">₹2,800/week</span>
                  <span className="text-xs text-green-600 ml-2">Save 11%</span>
                </div>
              </div>
              
              <div 
                className={`p-4 cursor-pointer transition-colors duration-200 ${
                  selectedBillType === 'monthly' ? 'bg-blue-50 border-blue-500' : 'border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedBillType('monthly')}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-900">Monthly Rental</h3>
                    <p className="text-sm text-gray-500">Pay for 30 days</p>
                  </div>
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedBillType === 'monthly' ? 'border-blue-500' : 'border-gray-300'
                    }`}>
                      {selectedBillType === 'monthly' && (
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-right">
                  <span className="font-bold text-gray-900">₹11,000/month</span>
                  <span className="text-xs text-green-600 ml-2">Save 18%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Rental Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Selected Plan:</span>
                  <span className="font-medium text-gray-900 capitalize">{selectedBillType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Base Price:</span>
                  <span className="font-medium text-gray-900">
                    {selectedBillType === 'daily' ? '₹450/day' : 
                     selectedBillType === 'weekly' ? '₹2,800/week' : '₹11,000/month'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium text-gray-900">
                    {selectedBillType === 'daily' ? '1 day' : 
                     selectedBillType === 'weekly' ? '7 days' : '30 days'}
                  </span>
                </div>
                <div className="border-t border-gray-200 my-2 pt-2">
                  <div className="flex justify-between font-bold">
                    <span className="text-gray-900">Total Amount:</span>
                    <span className="text-blue-600">
                      {selectedBillType === 'daily' ? '₹450' : 
                       selectedBillType === 'weekly' ? '₹2,800' : '₹11,000'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="w-full bg-blue-600 text-white font-medium rounded-md px-6 py-3 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rentpage 