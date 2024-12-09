import React from 'react';
import ContactForm from '../Components/ContactForm';
import GoogleMap from '../Components/GoogleMap';

const ContactUs = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600 text-center mb-10">
        Have questions or need assistance? Reach out to us using the form below or visit our office.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <ContactForm />

        {/* Google Maps */}
        <GoogleMap />
      </div>
    </div>
  );
};

export default ContactUs;
