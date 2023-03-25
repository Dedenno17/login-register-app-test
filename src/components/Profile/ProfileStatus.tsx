import React from 'react';
import { FiEdit } from 'react-icons/fi';

const ProfileStatus: React.FC = () => {
  return (
    <div className="w-[40%] flex flex-col gap-6">
      <div className="w-full bg-white p-6 flex flex-col gap-5 rounded-lg">
        <div className="relative w-full flex-col gap-1">
          <h3 className="text-2xl font-bold text-darkGrey">Profile Status</h3>
          <p className="text-lg font-bold text-darkGrey">Intermediate</p>
          <p className="text-lg text-darkGrey">
            Complete 2 steps to achieve Expert!
          </p>
          <div className="absolute top-0 right-0 flex items-center gap-1">
            <span className="w-1 h-1 bg-lightGrey rounded-full" />
            <span className="w-1 h-1 bg-lightGrey rounded-full" />
            <span className="w-1 h-1 bg-lightGrey rounded-full" />
          </div>
        </div>

        <div className="w-full h-10 rounded-lg bg-lighterGrey shadow-inner overflow-hidden relative">
          <div className="w-[70%] absolute top-0 bottom-0 rounded-lg bg-primaryRed text-white text-2xl font-bold flex justify-center items-center">
            70%
          </div>
        </div>

        <div className="w-full h-80 flex flex-col gap-3 overflow-y-auto pr-3 scrollbar scrollbar-track-lighterGrey scrollbar-track-rounded-lg scrollbar-thumb-lightGrey scrollbar-thumb-rounded-lg">
          <div className="py-3 px-4 flex flex-col gap-4 bg-lighterGrey rounded-lg">
            <h5 className="text-lg text-darkGrey font-semibold">
              Which industry do you work in?
            </h5>
            <p className="text-md text-darkGrey">
              Members who add an industry receive up to 2.5 times as many
              profile views
            </p>
            <button
              type="button"
              className="w-[30%] bg-transparent text-lg font-semibold text-darkGrey rounded-md cursor-pointer py-1 px-5 border-[1px] border-darkGrey"
            >
              Button
            </button>
          </div>
          <div className="py-3 px-4 flex flex-col gap-4 bg-lighterGrey rounded-lg">
            <h5 className="text-lg text-darkGrey font-semibold">
              Which University do you go to?
            </h5>
            <p className="text-md text-darkGrey">
              Members who add an industry receive up to 2.5 times as many
              profile views
            </p>
            <button
              type="button"
              className="w-[30%] bg-transparent text-lg font-semibold text-darkGrey rounded-md cursor-pointer py-1 px-5 border-[1px] border-darkGrey"
            >
              Button
            </button>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="w-full bg-white p-6 flex flex-col gap-5 relative rounded-lg">
        <h3 className="text-2xl font-bold text-darkGrey">About</h3>
        <p className="text-lg text-darkGrey text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet fu
        </p>
        <div className="w-6 h-6 bg-white absolute top-8 right-6 rounded-md flex">
          <FiEdit className="text-lg text-lighterGrey m-auto" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProfileStatus);
