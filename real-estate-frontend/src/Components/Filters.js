import React from 'react';

const Filters = ({ filters, setFilters, applyFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className="flex flex-wrap justify-center mb-6 space-x-4">
      <input
        type="text"
        name="location"
        placeholder="Location"
        className="p-2 border rounded"
        value={filters.location}
        onChange={handleFilterChange}
      />
      <select
        name="type"
        className="p-2 border rounded"
        value={filters.type}
        onChange={handleFilterChange}
      >
        <option value="">All Types</option>
        <option value="residential">Residential</option>
        <option value="commercial">Commercial</option>
        <option value="buy">Buy</option>
        <option value="rent">Rent</option>
      </select>
      <input
        type="number"
        name="minPrice"
        placeholder="Min Price"
        className="p-2 border rounded"
        value={filters.minPrice}
        onChange={handleFilterChange}
      />
      <input
        type="number"
        name="maxPrice"
        placeholder="Max Price"
        className="p-2 border rounded"
        value={filters.maxPrice}
        onChange={handleFilterChange}
      />
      <select
        name="sort"
        className="p-2 border rounded"
        value={filters.sort}
        onChange={handleFilterChange}
      >
        <option value="">Sort By</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="newest">Newest First</option>
      </select>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={applyFilters}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
