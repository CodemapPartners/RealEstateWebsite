import axios from 'axios';

// Fetch property details by ID
export const getPropertyById = (id) => {
  return axios.get(`http://localhost:5000/api/properties/${id}`);
};

// Submit an inquiry for a property
export const submitInquiry = (inquiryData) => {
  return axios.post('http://localhost:5000/api/inquiries', inquiryData);
};
