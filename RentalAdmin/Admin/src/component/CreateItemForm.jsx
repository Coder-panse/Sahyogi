import React from 'react';

const CreateItemForm = ({
  newItem,
  errors,
  isSubmitting,
  successMessage,
  onInputChange,
  onFeatureChange,
  onAddFeature,
  onRemoveFeature,
  onSpecificationChange,
  onSubmit,
  onCancel
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Create New Rental Item</h2>
        <button
          onClick={onCancel}
          className="text-gray-600 hover:text-gray-900"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      {successMessage && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
          {successMessage}
        </div>
      )}
      
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Item Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newItem.name}
              onChange={onInputChange}
              className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                errors.name ? 'border-red-500' : ''
              }`}
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>
          
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category *
            </label>
            <select
              id="category"
              name="category"
              value={newItem.category}
              onChange={onInputChange}
              className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                errors.category ? 'border-red-500' : ''
              }`}
            >
              <option value="machinery">Machinery</option>
              <option value="vehicle">Vehicle</option>
            </select>
            {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
          </div>
          
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Image URL *
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={newItem.image}
              onChange={onInputChange}
              className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                errors.image ? 'border-red-500' : ''
              }`}
            />
            {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image}</p>}
          </div>
          
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price (₹/day) *
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={newItem.price}
              onChange={onInputChange}
              className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                errors.price ? 'border-red-500' : ''
              }`}
            />
            {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price}</p>}
          </div>
          
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location *
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={newItem.location}
              onChange={onInputChange}
              className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                errors.location ? 'border-red-500' : ''
              }`}
            />
            {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              value={newItem.description}
              onChange={onInputChange}
              className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                errors.description ? 'border-red-500' : ''
              }`}
            />
            {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Features *
            </label>
            <button
              type="button"
              onClick={onAddFeature}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              + Add Feature
            </button>
          </div>
          
          {errors.features && <p className="mb-2 text-sm text-red-600">{errors.features}</p>}
          
          <div className="space-y-2">
            {newItem.features.map((feature, index) => (
              <div key={index} className="flex">
                <input
                  type="text"
                  value={feature}
                  onChange={(e) => onFeatureChange(index, e.target.value)}
                  className="flex-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder={`Feature ${index + 1}`}
                />
                {newItem.features.length > 1 && (
                  <button
                    type="button"
                    onClick={() => onRemoveFeature(index)}
                    className="ml-2 text-red-600 hover:text-red-800"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Specifications *</h3>
          
          {errors.specifications && <p className="mb-2 text-sm text-red-600">{errors.specifications}</p>}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="engine" className="block text-sm font-medium text-gray-700">
                Engine
              </label>
              <input
                type="text"
                id="engine"
                value={newItem.specifications.engine}
                onChange={(e) => onSpecificationChange('engine', e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            
            <div>
              <label htmlFor="fuelCapacity" className="block text-sm font-medium text-gray-700">
                Fuel Capacity
              </label>
              <input
                type="text"
                id="fuelCapacity"
                value={newItem.specifications.fuelCapacity}
                onChange={(e) => onSpecificationChange('fuelCapacity', e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            
            <div>
              <label htmlFor="transmission" className="block text-sm font-medium text-gray-700">
                Transmission
              </label>
              <input
                type="text"
                id="transmission"
                value={newItem.specifications.transmission}
                onChange={(e) => onSpecificationChange('transmission', e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            
            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                Weight
              </label>
              <input
                type="text"
                id="weight"
                value={newItem.specifications.weight}
                onChange={(e) => onSpecificationChange('weight', e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="dimensions" className="block text-sm font-medium text-gray-700">
                Dimensions
              </label>
              <input
                type="text"
                id="dimensions"
                value={newItem.specifications.dimensions}
                onChange={(e) => onSpecificationChange('dimensions', e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white font-medium rounded-md px-6 py-3 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 disabled:opacity-50"
          >
            {isSubmitting ? 'Creating...' : 'Create Item'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateItemForm;