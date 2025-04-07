import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    aadhar: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    
    // Aadhar validation (12 digits)
    if (!formData.aadhar.trim()) {
      tempErrors.aadhar = 'Aadhar number is required';
    } else if (!/^\d{12}$/.test(formData.aadhar)) {
      tempErrors.aadhar = 'Aadhar number must be 12 digits';
    }

    // Password validation
    if (!formData.password) {
      tempErrors.password = 'Password is required';
    }

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
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Aadhar Field */}
            <div>
              <label htmlFor="aadhar" className="block text-sm font-medium text-gray-700">
                Aadhar Number *
              </label>
              <input
                id="aadhar"
                name="aadhar"
                type="text"
                required
                maxLength="12"
                value={formData.aadhar}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                  errors.aadhar ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.aadhar && <p className="mt-1 text-sm text-red-500">{errors.aadhar}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password *
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>

        <div className='text-center'>
            Don't have an account?  
            <span className='text-blue-500'>
                <Link to={'/signup'}>
                    Signup
                </Link>
                </span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm; 