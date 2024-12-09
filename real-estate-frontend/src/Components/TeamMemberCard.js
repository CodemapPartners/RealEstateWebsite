import React from 'react';

const TeamMemberCard = ({ member }) => {
  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-t" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{member.name}</h3>
        <p className="text-gray-500">{member.role}</p>
        <p className="text-gray-700 mt-2">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
