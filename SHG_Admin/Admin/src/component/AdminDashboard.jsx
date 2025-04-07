import React, { useState } from 'react';

const AdminDashboard = () => {
  // Sample data - replace with actual data from your backend
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: 'John Doe',
      aadhar: '123456789012',
      age: 35,
      gender: 'Male',
      disease: 'Diabetes',
      contact: '9876543210',
      address: '123 Main St, City',
      verified: false,
      dateAdded: '2023-05-15'
    },
    {
      id: 2,
      name: 'Jane Smith',
      aadhar: '987654321098',
      age: 42,
      gender: 'Female',
      disease: 'Hypertension',
      contact: '8765432109',
      address: '456 Oak Ave, Town',
      verified: true,
      dateAdded: '2023-05-14'
    },
    {
      id: 3,
      name: 'Robert Johnson',
      aadhar: '456789123045',
      age: 28,
      gender: 'Male',
      disease: 'Asthma',
      contact: '7654321098',
      address: '789 Pine Rd, Village',
      verified: false,
      dateAdded: '2023-05-13'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Handle verification
  const handleVerify = (patientId) => {
    setPatients(patients.map(patient => 
      patient.id === patientId 
        ? { ...patient, verified: true } 
        : patient
    ));
  };

  // Filter patients based on search term and verification status
  const filteredPatients = patients.filter(patient => {
    const matchesSearch = 
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.aadhar.includes(searchTerm) ||
      patient.disease.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterStatus === 'all') return matchesSearch;
    if (filterStatus === 'verified') return matchesSearch && patient.verified;
    if (filterStatus === 'unverified') return matchesSearch && !patient.verified;
    
    return matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Patient Records Dashboard</h1>
      
      {/* Search and Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search by name, Aadhar, or disease..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <select
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Patients</option>
            <option value="verified">Verified Only</option>
            <option value="unverified">Unverified Only</option>
          </select>
        </div>
      </div>
      
      {/* Patient Records Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aadhar</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Disease</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Added</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPatients.map((patient) => (
              <tr key={patient.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{patient.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.aadhar}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.age}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.gender}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.disease}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.contact}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.dateAdded}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    patient.verified 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {patient.verified ? 'Verified' : 'Pending'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {!patient.verified && (
                    <button
                      onClick={() => handleVerify(patient.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium"
                    >
                      Verify
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Empty state */}
      {filteredPatients.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No patient records found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard; 