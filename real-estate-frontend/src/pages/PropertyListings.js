import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filters from '../components/Filters';
import PropertyCard from '../components/PropertyCard';
import Pagination from '../components/Pagination';

const PropertyListings = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    sort: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const propertiesPerPage = 6;

  // Fetch properties on component mount
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/properties')
      .then((response) => {
        setProperties(response.data);
        setFilteredProperties(response.data);
        setTotalPages(Math.ceil(response.data.length / propertiesPerPage));
      })
      .catch((error) => console.error('Error fetching properties:', error));
  }, []);

  // Apply filters and sorting
  const applyFilters = () => {
    let filtered = [...properties];

    if (filters.location) {
      filtered = filtered.filter((property) =>
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.type) {
      filtered = filtered.filter((property) => property.type === filters.type);
    }

    if (filters.minPrice) {
      filtered = filtered.filter((property) => property.price >= parseInt(filters.minPrice));
    }
    if (filters.maxPrice) {
      filtered = filtered.filter((property) => property.price <= parseInt(filters.maxPrice));
    }

    if (filters.sort === 'priceAsc') {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'priceDesc') {
      filtered = filtered.sort((a, b) => b.price - a.price);
    } else if (filters.sort === 'newest') {
      filtered = filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    setFilteredProperties(filtered);
    setTotalPages(Math.ceil(filtered.length / propertiesPerPage));
    setCurrentPage(1);
  };

  // Pagination logic
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * propertiesPerPage;
  const currentProperties = filteredProperties.slice(startIndex, startIndex + propertiesPerPage);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Property Listings</h1>
      <Filters filters={filters} setFilters={setFilters} applyFilters={applyFilters} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentProperties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
      />
    </div>
  );
};

export default PropertyListings;
