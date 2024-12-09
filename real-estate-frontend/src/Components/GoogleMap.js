import React from 'react';

const GoogleMap = () => {
  return (
    <div className="h-64 rounded shadow-lg">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.4081571074!2d72.7410979!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8cfbacbb35%3A0x15191d9e8f318f7c!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1634747116827!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
