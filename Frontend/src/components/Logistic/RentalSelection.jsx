import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RentalSelection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
    const navigate=useNavigate()
  // Sample data for rental items
  const rentalItems = [
    {
      id: 1,
      name: 'Tractor',
      category: 'machinery',
      image: 'https://images.unsplash.com/photo-1590736969955-71ccd251f3d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: 1200,
      availability: true,
      description: 'Powerful tractor suitable for plowing, tilling, and other heavy farming tasks.',
      rating: 4.8,
      reviews: 24
    },
    {
      id: 2,
      name: 'Harvester',
      category: 'machinery',
      image: 'https://images.unsplash.com/photo-1590736969955-71ccd251f3d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: 2500,
      availability: true,
      description: 'Efficient harvester for crop harvesting operations.',
      rating: 4.6,
      reviews: 18
    },
    {
      id: 3,
      name: 'Seed Drill',
      category: 'machinery',
      image: 'https://images.unsplash.com/photo-1590736969955-71ccd251f3d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: 800,
      availability: true,
      description: 'Precision seed drill for efficient planting.',
      rating: 4.5,
      reviews: 12
    },
    {
      id: 4,
      name: 'Irrigation Pump',
      category: 'machinery',
      image: 'https://images.unsplash.com/photo-1590736969955-71ccd251f3d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: 450,
      availability: true,
      description: 'High-capacity pump for irrigation systems.',
      rating: 4.3,
      reviews: 9
    },
    {
      id: 5,
      name: 'Farm Truck',
      category: 'vehicle',
      image: 'https://images.unsplash.com/photo-1590736969955-71ccd251f3d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: 900,
      availability: true,
      description: 'Durable truck for transporting farm produce and equipment.',
      rating: 4.7,
      reviews: 15
    },
    {
      id: 6,
      name: 'Utility Vehicle',
      category: 'vehicle',
      image: 'https://images.unsplash.com/photo-1590736969955-71ccd251f3d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: 600,
      availability: true,
      description: 'Versatile utility vehicle for farm operations and transport.',
      rating: 4.4,
      reviews: 11
    },
    {
      id: 7,
      name: 'Sprayer',
      category: 'machinery',
      image: 'https://images.unsplash.com/photo-1590736969955-71ccd251f3d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: 700,
      availability: false,
      description: 'Agricultural sprayer for applying pesticides and fertilizers.',
      rating: 4.2,
      reviews: 8
    },
    {
      id: 8,
      name: 'Tiller',
      category: 'machinery',
      image: 'https://images.unsplash.com/photo-1590736969955-71ccd251f3d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: 350,
      availability: true,
      description: 'Power tiller for soil preparation and cultivation.',
      rating: 4.5,
      reviews: 14
    }
  ];

  // Filter items based on search term
  const filteredItems = rentalItems
    .filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  // Separate machinery and vehicles
  const machineryItems = filteredItems.filter(item => item.category === 'machinery');
  const vehicleItems = filteredItems.filter(item => item.category === 'vehicle');

  // Item card component to avoid repetition
  const ItemCard = ({ item }) => (
    <div className="bg-white overflow-hidden shadow-md rounded-lg">
      <div className="relative pb-48">
        <img
          className="absolute h-full w-full object-cover"
          src={item.image}
          alt={item.name}
        />
        {!item.availability && (
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
            Unavailable
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
        </div>
        <div className="mt-1 flex items-center">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(item.rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-500">({item.reviews} reviews)</span>
        </div>
        <p className="mt-2 text-sm text-gray-500 line-clamp-2">{item.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">₹{item.price}/day</span>
          <Link
            // to={`/rental/${item.id}`}
            to={'/rentpage'}
            className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
              item.availability
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            onClick={(e) => !item.availability && e.preventDefault()}
          >
            {item.availability ? 'Rent Now' : 'Unavailable'}
          </Link>
        </div>
      </div>
    </div>
  );

  // Empty state component
  const EmptyState = () => (
    <div className="text-center py-12">
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 className="mt-2 text-sm font-medium text-gray-900">No items found</h3>
      <p className="mt-1 text-sm text-gray-500">
        Try adjusting your search to find what you're looking for.
      </p>
    </div>
  );

  return (
    <div className="min-h-screen py-8">

        <div className='absolute '>
            <button className='relative px-5 py-2 rounded-md text-xl font-medium bg-gray-200' onClick={()=>navigate(-1)}>Back</button>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Rent Farming Equipment
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Browse our selection of farming machinery and vehicles available for rent
          </p>
        </div>

        {/* Search and Sort */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="w-full md:w-64">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative rounded-md shadow-sm ">
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md outline-none px-4 py-2"
                  placeholder="Search items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="sort" className="block text-sm font-medium text-gray-700">
                Sort By
              </label>
              <select
                id="sort"
                name="sort"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Machinery Section */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900">Farming Machinery</h2>
          </div>
          
          {machineryItems.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {machineryItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>

        {/* Vehicles Section */}
        <div>
          <div className="flex items-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900">Farm Vehicles</h2>
          </div>
          
          {vehicleItems.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {vehicleItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </div>
  );
};

export default RentalSelection; 