import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('items');
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    category: 'machinery',
    image: '',
    price: '',
    description: '',
    location: '',
    features: [''],
    specifications: {
      engine: '',
      fuelCapacity: '',
      transmission: '',
      weight: '',
      dimensions: ''
    }
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Simulated data - in a real app, this would come from an API
  useEffect(() => {
    // Simulate fetching items
    const fetchItems = () => {
      setTimeout(() => {
        setItems([
          {
            id: 1,
            name: 'Tractor',
            category: 'machinery',
            image: 'tractor.png',
            price: 450,
            availability: true,
            description: 'High-capacity pump for irrigation systems.',
            location: 'Mumbai',
            features: ['High horsepower engine', 'Advanced hydraulic system', 'Comfortable operator cabin'],
            specifications: {
              engine: '45 HP',
              fuelCapacity: '60 liters',
              transmission: 'Manual',
              weight: '2,500 kg',
              dimensions: '3.5m x 1.8m x 2.2m'
            }
          },
          {
            id: 2,
            name: 'Harvester',
            category: 'machinery',
            image: 'harvester.png',
            price: 1200,
            availability: true,
            description: 'Efficient harvester for crop harvesting operations.',
            location: 'Delhi',
            features: ['High-capacity grain tank', 'Advanced threshing system', 'Adjustable cutting height'],
            specifications: {
              engine: '120 HP',
              grainTank: '5,000 liters',
              cuttingWidth: '5 meters',
              weight: '8,000 kg',
              dimensions: '7.2m x 3.2m x 3.5m'
            }
          }
        ]);
      }, 500);
    };

    // Simulate fetching orders
    const fetchOrders = () => {
      setTimeout(() => {
        setOrders([
          {
            id: 1,
            itemId: 1,
            itemName: 'Tractor',
            customerName: 'Rajesh Kumar',
            customerEmail: 'rajesh@example.com',
            customerPhone: '9876543210',
            rentalPeriod: 'weekly',
            startDate: '2023-06-15',
            endDate: '2023-06-22',
            totalAmount: 2800,
            status: 'pending',
            orderDate: '2023-06-10'
          },
          {
            id: 2,
            itemId: 2,
            itemName: 'Harvester',
            customerName: 'Priya Sharma',
            customerEmail: 'priya@example.com',
            customerPhone: '9876543211',
            rentalPeriod: 'monthly',
            startDate: '2023-06-20',
            endDate: '2023-07-20',
            totalAmount: 11000,
            status: 'confirmed',
            orderDate: '2023-06-12'
          }
        ]);
      }, 500);
    };

    fetchItems();
    fetchOrders();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFeatureChange = (index, value) => {
    const updatedFeatures = [...newItem.features];
    updatedFeatures[index] = value;
    setNewItem(prev => ({
      ...prev,
      features: updatedFeatures
    }));
  };

  const addFeature = () => {
    setNewItem(prev => ({
      ...prev,
      features: [...prev.features, '']
    }));
  };

  const removeFeature = (index) => {
    const updatedFeatures = newItem.features.filter((_, i) => i !== index);
    setNewItem(prev => ({
      ...prev,
      features: updatedFeatures
    }));
  };

  const handleSpecificationChange = (key, value) => {
    setNewItem(prev => ({
      ...prev,
      specifications: {
        ...prev.specifications,
        [key]: value
      }
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!newItem.name.trim()) newErrors.name = 'Name is required';
    if (!newItem.category) newErrors.category = 'Category is required';
    if (!newItem.image.trim()) newErrors.image = 'Image URL is required';
    if (!newItem.price || isNaN(newItem.price) || newItem.price <= 0) newErrors.price = 'Valid price is required';
    if (!newItem.description.trim()) newErrors.description = 'Description is required';
    if (!newItem.location.trim()) newErrors.location = 'Location is required';
    
    // Check if any feature is empty
    const emptyFeatures = newItem.features.some(feature => !feature.trim());
    if (emptyFeatures) newErrors.features = 'All features must have content';
    
    // Check if any specification is empty
    const emptySpecs = Object.values(newItem.specifications).some(spec => !spec.trim());
    if (emptySpecs) newErrors.specifications = 'All specifications must have content';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call to create item
      setTimeout(() => {
        const newId = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
        const createdItem = {
          ...newItem,
          id: newId,
          availability: true
        };
        
        setItems(prev => [...prev, createdItem]);
        setNewItem({
          name: '',
          category: 'machinery',
          image: '',
          price: '',
          description: '',
          location: '',
          features: [''],
          specifications: {
            engine: '',
            fuelCapacity: '',
            transmission: '',
            weight: '',
            dimensions: ''
          }
        });
        
        setSuccessMessage('Item created successfully!');
        setIsSubmitting(false);
        
        // Clear success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      }, 1000);
    }
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prev => 
      prev.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const deleteItem = (itemId) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setItems(prev => prev.filter(item => item.id !== itemId));
    }
  };

  const renderItemsList = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Rental Items</h2>
        <button
          onClick={() => setActiveTab('create')}
          className="bg-blue-600 text-white font-medium rounded-md px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add New Item
        </button>
      </div>
      
      {items.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No items available. Create your first rental item.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {items.map(item => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img className="h-10 w-10 rounded-full object-cover" src={item.image} alt={item.name} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 capitalize">{item.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">₹{item.price}/day</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.location}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.availability ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {item.availability ? 'Available' : 'Rented'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => navigate(`/admin/edit/${item.id}`)}
                      className="text-blue-600 hover:text-blue-900 mr-3"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );

  const renderCreateItemForm = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Create New Rental Item</h2>
        <button
          onClick={() => setActiveTab('items')}
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
      
      <form onSubmit={handleSubmit} className="space-y-6">
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onClick={addFeature}
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
                  onChange={(e) => handleFeatureChange(index, e.target.value)}
                  className="flex-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder={`Feature ${index + 1}`}
                />
                {newItem.features.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeFeature(index)}
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
                onChange={(e) => handleSpecificationChange('engine', e.target.value)}
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
                onChange={(e) => handleSpecificationChange('fuelCapacity', e.target.value)}
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
                onChange={(e) => handleSpecificationChange('transmission', e.target.value)}
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
                onChange={(e) => handleSpecificationChange('weight', e.target.value)}
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
                onChange={(e) => handleSpecificationChange('dimensions', e.target.value)}
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

  const renderOrdersList = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Rental Orders</h2>
      
      {orders.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No orders available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rental Period
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map(order => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    #{order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.itemName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{order.customerName}</div>
                    <div className="text-sm text-gray-500">{order.customerEmail}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 capitalize">{order.rentalPeriod}</div>
                    <div className="text-xs text-gray-500">
                      {order.startDate} to {order.endDate}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ₹{order.totalAmount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === 'confirmed' ? 'bg-green-100 text-green-800' : 
                      order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                      order.status === 'cancelled' ? 'bg-red-100 text-red-800' : 
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <select
                      value={order.status}
                      onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                      className="border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage your rental items and track orders
          </p>
        </div>
        
        <div className="mb-6">
          <nav className="flex space-x-4">
            <button
              onClick={() => setActiveTab('items')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === 'items' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Items
            </button>
            <button
              onClick={() => setActiveTab('create')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === 'create' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Create Item
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === 'orders' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Orders
            </button>
          </nav>
        </div>
        
        {activeTab === 'items' && renderItemsList()}
        {activeTab === 'create' && renderCreateItemForm()}
        {activeTab === 'orders' && renderOrdersList()}
      </div>
    </div>
  );
};

export default AdminDashboard; 