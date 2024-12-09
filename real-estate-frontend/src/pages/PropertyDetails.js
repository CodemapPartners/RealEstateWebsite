import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To get the property ID from URL
import axios from 'axios';
import ImageCarousel from '../Components/ImageCarousel';
import InquiryForm from '../Components/InquiryForm';

const PropertyDetails = () => {
  const { id } = useParams(); // Get property ID from URL
  const [property, setProperty] = useState(null);

  useEffect(() => {
    // Fetch property details using the ID
    axios.get(`http://localhost:5000/api/properties/${id}`) // Adjust URL for your backend
      .then(response => {
        setProperty(response.data); // Assuming backend returns a single property object
      })
      .catch(error => {
        console.error('Error fetching property details:', error);
      });
  }, [id]);

  if (!property) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>

      {/* Image Carousel */}
      {property.images && <ImageCarousel images={property.images} />}

      {/* Property Information */}
      <div className="py-4">
        <p><strong>Location:</strong> {property.location}</p>
        <p><strong>Price:</strong> ${property.price}</p>
        <p><strong>Description:</strong> {property.description}</p>
        <p><strong>Type:</strong> {property.type}</p>
        {property.amenities && <p><strong>Amenities:</strong> {property.amenities.join(', ')}</p>}
      </div>

      {/* Inquiry Form */}
      <InquiryForm propertyId={property._id} />
    </div>
  );
};

export default PropertyDetails;

