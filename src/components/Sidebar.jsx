import React from 'react';

export default function Sidebar({ username, name, suggestions }) {
  return (
    <div className="w-full md:w-1/3 mt-8 md:mt-0">
      <div className="md:fixed md:w-1/4">
        
        <div className="flex items-center mb-4">
          <img src="https://i.pinimg.com/236x/b0/41/ed/b041ed6928738a65269be01d7dac2c82.jpg" alt={`${name}'s profile`} className="w-14 h-14 rounded-full mr-4" />
          <div>
            <p className="font-semibold">{username}</p>
            <p className="text-gray-500">{name}</p>
          </div>
        </div>

        {/* सुझावों की सूची */}
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex justify-between mb-2">
            <span className="text-gray-500 font-semibold">Suggestions For You</span>
            <a href="#" className="text-xs font-semibold">See All</a>
          </div>
          {suggestions.map((user, index) => (
            <div key={index} className="flex items-center justify-between my-2">
              <div className="flex items-center">
                <img src={user.avatar} alt={`${user.username}'s avatar`} className="w-8 h-8 rounded-full mr-3" />
                <div>
                  <p className="text-sm font-semibold">{user.username}</p>
                  <p className="text-xs text-gray-500">{user.suggestionReason}</p>
                </div>
              </div>
              <a href="#" className="text-xs font-semibold text-blue-500">Follow</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
