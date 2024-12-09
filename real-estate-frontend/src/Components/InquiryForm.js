import React, { useState } from 'react';
import axios from 'axios';

const InquiryForm = ({ propertyId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const inquiryData = {
      ...formData,
      propertyId,
    };

    // Send the inquiry data to the backend API
    axios.post('http://localhost:5000/api/inquiries', inquiryData)
      .then((response) => {
        setStatus('Inquiry submitted successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Error submitting inquiry:', error);
        setStatus('Failed to submit inquiry. Please try again.');
      });
  };

  return (
    <div className="py-4">
      <h3 className="text-2xl font-semibold mb-4">Inquire about this Property</h3>

      {status && <p className="mb-4 text-green-500">{status}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-2 border rounded"
          rows="4"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Submit Inquiry
        </button>
      </form>
    </div>
  );
};

export default InquiryForm;

