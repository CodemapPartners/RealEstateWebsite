import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <img
        src={property.images[0]}
        alt={property.title}
        className="w-full h-48 object-cover rounded-t"
      />
      <div className="p-4">
        <h5 className="text-xl font-semibold">{property.title}</h5>
        <p className="text-gray-500">{property.location}</p>
        <p className="text-gray-700">${property.price}</p>
        <a href={`/property/${property._id}`} className="text-blue-500 hover:text-blue-700">
          View Details
        </a>
      </div>
    </div>
  );
};

export default PropertyCard;
