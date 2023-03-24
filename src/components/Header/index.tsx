import React from 'react';
import { TbWorld } from 'react-icons/tb';
import { FaAngleDown, FaCaretDown } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { MdMail, MdNotificationsNone } from 'react-icons/md';

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between gap-6 py-3 px-6 bg-white">
      {/* LOGO */}
      <div className="w-[10%]">
        <h1 className="text-3xl text-darkGrey font-bold">LOGO</h1>
      </div>

      {/* SEARCH INPUPT */}
      <div className="w-[75%] p-3 gap-3 flex items-center bg-[#EFEFEF]">
        <TbWorld className="w-[5%] text-lg" />
        <div className="flex items-center justify-between w-[10%]">
          <p>Menu</p>
          <FaAngleDown />
        </div>
        <form className="w-[85%] flex items-center gap-3">
          <input
            type="text"
            placeholder="Search ..."
            className="px-3 w-[90%] bg-transparent outline-none border-l-[1px] border-l-lightGrey"
          />
          <button className="w-[10%] bg-primaryRed text-lg py-1 text-white flex justify-center items-center rounded-md cursor-pointer outline-none">
            <BiSearch />
          </button>
        </form>
      </div>

      {/* NOTIF */}
      <div className="w-[15%] flex items-center justify-between gap-4">
        <MdMail className="text-2xl text-darkGrey w-[20%]" />
        <MdNotificationsNone className="text-2xl text-darkGrey w-[20%]" />
        <div className="w-[50%] flex items-center justify-between p-1 border-[1px] border-darkGrey rounded-md">
          <div className="w-[35%] bg-primaryRed">
            <img
              src="./profilepic-1.png"
              alt="profile pic"
              className="object-cover"
            />
          </div>
          <FaCaretDown className="text-lg text-darkGrey w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Header;
