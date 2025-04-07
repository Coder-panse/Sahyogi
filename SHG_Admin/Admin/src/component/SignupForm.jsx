import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    aadhar: "",
    mobile: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    }

    // Aadhar validation (12 digits)
    if (!formData.aadhar.trim()) {
      tempErrors.aadhar = "Aadhar number is required";
    } else if (!/^\d{12}$/.test(formData.aadhar)) {
      tempErrors.aadhar = "Aadhar number must be 12 digits";
    }

    // Mobile validation (10 digits)
    if (!formData.mobile.trim()) {
      tempErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      tempErrors.mobile = "Mobile number must be 10 digits";
    }

    // Password validation
    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }

    // Confirm password validation

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission here
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div>
      <div className="absolute cursor-pointer px-4 py-1.5 bg-black text-white rounded-full top-[150px] ml-4 ">
        <Link onClick={() => navigate(-1)}>Back</Link>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Aadhar Field */}
              <div>
                <label
                  htmlFor="aadhar"
                  className="block text-sm font-medium text-gray-700"
                >
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
                    errors.aadhar ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.aadhar && (
                  <p className="mt-1 text-sm text-red-500">{errors.aadhar}</p>
                )}
              </div>

              {/* Mobile Number Field */}
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile Number *
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  required
                  maxLength="10"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                    errors.mobile ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.mobile && (
                  <p className="mt-1 text-sm text-red-500">{errors.mobile}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
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
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign up
              </button>
            </div>
          </form>

          <div className="text-center">
            <h1>
              Already have an account?{" "}
              <span className="text-blue-500">
                <Link
                  to="/login"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Login
                </Link>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
