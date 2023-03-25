import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { FiEdit } from 'react-icons/fi';

const ProfileUser: React.FC = () => {
  // global state
  const user = useAppSelector((state) => state.login.currentUser);

  return (
    <div className="w-full bg-white flex items-end justify-between px-8 pt-[5rem] pb-5 rounded-t-[3rem]">
      {/* VIEWS */}
      <div className="w-[20%]">
        <ul className="w-[51%] flex items-center justify-between bg-lighterGrey">
          <li className="flex flex-col items-center px-2 bg-white">
            <span className="text-xl font-semibold text-darkGrey">482</span>
            <span className="text-sm text-darkGrey">Views</span>
          </li>
          <li className="flex flex-col items-center px-2 bg-white">
            <span className="text-xl font-semibold text-darkGrey">542</span>
            <span className="text-sm text-darkGrey">Connects</span>
          </li>
          <li className="flex flex-col items-center px-2 bg-white">
            <span className="text-xl font-semibold text-darkGrey">1.245</span>
            <span className="text-sm text-darkGrey">Followers</span>
          </li>
        </ul>
      </div>

      {/* INFO USER */}
      <div className="w-[50%] flex flex-col items-center gap-2">
        <div className="flex items-center gap-7">
          <div className="flex items-center gap-3">
            <h4 className="text-3xl font-bold text-darkGrey">
              {user?.user.firstName} {user?.user.lastName}
            </h4>
            <img src="./enfj.png" alt="mbti" className="w-10 h-10" />
          </div>
          <FiEdit className="text-xl text-lightGrey m-auto" />
        </div>
        <div className="w-full flex items-center ">
          <div className="w-1/2 p-1 text-center border-r-[1px] border-darkGrey text-darkGrey font-semibold text-md">
            UI/UX Designer at Talent Insider
          </div>
          <div className="w-1/2 p-1 text-center text-darkGrey text-md">
            South Jakarta, DKI Jakarta, Indonesia
          </div>
        </div>
        <button
          type="button"
          className="bg-primaryRed text-lg font-semibold text-white rounded-md cursor-pointer py-1 px-5"
        >
          Button
        </button>
      </div>
      <div className="w-[20%] flex flex-col gap-2 items-end">
        <button className="w-44 py-2 flex justify-center items-center text-lg text-darkGrey border-[1px] border-darkGrey rounded-md font-semibold cursor-pointer hover:bg-primaryRed hover:text-white hover:border-primaryRed">
          Button
        </button>
        <button className="w-44 py-2 flex justify-center items-center text-lg text-darkGrey border-[1px] border-darkGrey rounded-md font-semibold cursor-pointer hover:bg-primaryRed hover:text-white hover:border-primaryRed">
          Button
        </button>
        <button className="w-44 py-2 flex justify-center items-center text-lg text-darkGrey border-[1px] border-darkGrey rounded-md font-semibold cursor-pointer hover:bg-primaryRed hover:text-white hover:border-primaryRed">
          Button
        </button>
      </div>
    </div>
  );
};

export default React.memo(ProfileUser);
