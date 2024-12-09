import React from 'react';
import TeamMemberCard from '../Components/TeamMemberCard';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Senior Agent',
      bio: 'John has 10+ years of experience in real estate and specializes in luxury properties.',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jane Smith',
      role: 'Real Estate Manager',
      bio: 'Jane oversees operations and ensures client satisfaction at every step.',
      image: 'https://via.placeholder.com/150',
    },
    // Add more team members here
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
      <p className="text-lg text-gray-600 text-center mb-10">
        We are a leading real estate agency committed to helping you find your dream property. Our team of dedicated professionals works tirelessly to ensure your satisfaction.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
