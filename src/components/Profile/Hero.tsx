import React from 'react';
import { FiEdit } from 'react-icons/fi';

const Hero: React.FC = () => {
  return (
    <div className="w-full relative">
      <div className="w-full overflow-hidden rounded-b-lg">
        <img src="./hero.png" alt="hero" className="object-cover" />
      </div>
      <div className="w-[12rem] h-60 bg-primaryRed absolute left-1/2 -translate-x-1/2 -bottom-1/3 rounded-b-full flex z-10">
        <img
          src="./profilepic-2.png"
          alt="profile"
          className="object-cover m-auto"
        />
      </div>
      <div className="w-12 h-12 bg-white absolute top-8 right-8 rounded-md flex">
        <FiEdit className="text-2xl text-darkGrey m-auto" />
      </div>
    </div>
  );
};

export default React.memo(Hero);
