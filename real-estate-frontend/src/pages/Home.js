import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [properties, setProperties] = useState([]); // Stores fetched property data
  const [filteredProperties, setFilteredProperties] = useState([]); // Stores filtered properties
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    type: '',
  });

  // Fetch properties on component mount
  useEffect(() => {
    axios.get('http://localhost:5000/api/properties') // Update this URL if needed
      .then((response) => {
        setProperties(response.data); // Set properties from backend
        setFilteredProperties(response.data); // Default to showing all properties
      })
      .catch((error) => console.error('Error fetching properties:', error));
  }, []);

  // Handle input changes in the filter form
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Apply filters to properties
  const applyFilters = () => {
    const { location, minPrice, maxPrice, type } = filters;
    let filtered = properties;

    // Filter by location
    if (location) {
      filtered = filtered.filter((property) =>
        property.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    // Filter by price range
    if (minPrice) {
      filtered = filtered.filter((property) => property.price >= parseInt(minPrice));
    }
    if (maxPrice) {
      filtered = filtered.filter((property) => property.price <= parseInt(maxPrice));
    }

    // Filter by type
    if (type) {
      filtered = filtered.filter((property) => property.type === type);
    }

    setFilteredProperties(filtered);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-cover bg-center h-96 flex justify-center items-center text-white" style={{ backgroundImage: 'url(https://via.placeholder.com/1200x500)' }}>
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4">Find Your Dream Property</h1>
          <div className="mt-4">
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="p-2 rounded mr-2"
              value={filters.location}
              onChange={handleFilterChange}
            />
            <input
              type="number"
              name="minPrice"
              placeholder="Min Price"
              className="p-2 rounded mr-2"
              value={filters.minPrice}
              onChange={handleFilterChange}
            />
            <input
              type="number"
              name="maxPrice"
              placeholder="Max Price"
              className="p-2 rounded mr-2"
              value={filters.maxPrice}
              onChange={handleFilterChange}
            />
            <select
              name="type"
              className="p-2 rounded"
              value={filters.type}
              onChange={handleFilterChange}
            >
              <option value="">All Types</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded ml-2 hover:bg-blue-600"
              onClick={applyFilters}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Featured Properties Section */}
      <div className="container mx-auto py-8">
        <h2 className="text-center text-3xl mb-6">Featured Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <div key={property._id} className="bg-white p-4 rounded shadow-lg">
              <img src={property.images[0]} alt={property.title} className="w-full h-48 object-cover rounded-t" />
              <div className="p-4">
                <h5 className="text-xl font-semibold">{property.title}</h5>
                <p className="text-gray-500">{property.location}</p>
                <p className="text-gray-700">${property.price}</p>
                <a href={`/property/${property._id}`} className="text-blue-500 hover:text-blue-700">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

