import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PatientForm = () => {

    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    disease: '',
    contact: '',
    address: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.age) tempErrors.age = 'Age is required';
    if (!formData.gender) tempErrors.gender = 'Gender is required';
    if (!formData.disease.trim()) tempErrors.disease = 'Disease is required';
    if (!formData.contact.trim()) tempErrors.contact = 'Contact number is required';
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
      console.log('Form submitted:', formData);
        navigate("/healthcare")
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-8 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">Patient Details Form</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block font-medium text-gray-700">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && <span className="text-sm text-red-500">{errors.name}</span>}
        </div>

        <div className="space-y-2">
          <label htmlFor="age" className="block font-medium text-gray-700">Age *</label>
          <input
            type="number"
            id="age"
            min={1}
            name="age"
            value={formData.age}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.age ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.age && <span className="text-sm text-red-500">{errors.age}</span>}
        </div>

        <div className="space-y-2">
          <label htmlFor="gender" className="block font-medium text-gray-700">Gender *</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.gender ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span className="text-sm text-red-500">{errors.gender}</span>}
        </div>

        <div className="space-y-2">
          <label htmlFor="disease" className="block font-medium text-gray-700">Disease *</label>
          <input
            type="text"
            id="disease"
            name="disease"
            value={formData.disease}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.disease ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.disease && <span className="text-sm text-red-500">{errors.disease}</span>}
        </div>

        <div className="space-y-2">
          <label htmlFor="contact" className="block font-medium text-gray-700">Contact Number *</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.contact ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.contact && <span className="text-sm text-red-500">{errors.contact}</span>}
        </div>

        <div className="space-y-2">
          <label htmlFor="address" className="block font-medium text-gray-700">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] resize-y"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-600 active:bg-blue-700 transition-colors duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PatientForm;