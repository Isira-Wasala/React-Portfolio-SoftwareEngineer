import React from 'react';

const Card = ({ title, des, icon }) => {
  return (
    <div className="w-full px-12 h-96 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-transform transform group-hover:scale-105 group-hover:rotate-3 duration-500 ease-in-out">
      <div className="flex h-full flex-col justify-center items-center">
        <div className="text-5xl text-designColor mb-4">
          {icon}
        </div>
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300 mb-2">
            {title}
          </h2>
          <p className="text-gray-400">{des}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
