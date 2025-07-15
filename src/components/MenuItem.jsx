import React from 'react';

const MenuItem = ({ name, photoUrl }) => {
  const getImageUrl = (imageName) => {
    if (imageName.startsWith('http') || imageName.startsWith('https')) {
        return imageName;
    }else if (imageName === ''){
      return './img/no-image.png';
    }
    return `./img/${imageName}`;
  }
  return (
    <div className="w-[14rem] mx-auto bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative w-full h-52 overflow-hidden">
        <img
          src={getImageUrl(photoUrl)}
          alt={name}
          className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-b from-transparent to-white backdrop-blur-sm" />
      </div>

      {/* Content Section */}
      <div className="p-2">
        {/* Menu Item Name */}
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        
        {/* Description */}
        {/* <p className="text-gray-600 text-sm">{description}</p> */}
      </div>

      {/* Decorative Divider */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400"></div>
    </div>
  );
};

export default MenuItem;
