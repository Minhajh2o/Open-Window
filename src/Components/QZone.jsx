import React from 'react';
// Import your images. Make sure these paths are correct.
// You might need to adjust them based on where you save your images.
import swimmingImg from '../assets/swimming.png'; // Replace with your actual path
import classImg from '../assets/class.png';     // Replace with your actual path
import playgroundImg from '../assets/playground.png'; // Replace with your actual path

const QZone = () => {
  // Array to hold your Q-Zone items
  const qZoneItems = [
    {
      id: 1,
      image: swimmingImg,
      label: 'Swimming',
    },
    {
      id: 2,
      image: classImg,
      label: 'Class',
    },
    {
      id: 3,
      image: playgroundImg,
      label: 'Play Ground',
    },
  ];

  return (
    <div className="bg-gray-100 rounded-lg p-4 mt-8"> {/* Main container with light gray background and rounded corners */}
      <h2 className="text-xl font-bold mb-5">Q-Zone</h2> {/* Title for the section */}
      <div className="space-y-6"> {/* Container for the Q-Zone items, with vertical spacing */}
        {qZoneItems.map(item => (
          <div
            key={item.id}
            className="relative transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
          >

            <img
              src={item.image}
              alt={item.label}
              className="w-full h-auto rounded-md"
            />
            </div>
        ))}
      </div>
    </div>
  );
};

export default QZone;