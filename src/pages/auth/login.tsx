import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import FormLogin from '../../components/Login/FormLogin';

const Login: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white p-16 relative">
      {/* HEADER */}
      <div className="w-full flex justify-between">
        <h1 className="text-3xl text-darkGrey font-bold">LOGO</h1>
        <span className="text-lg text-primaryGrey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </span>
      </div>

      {/* BG GRADIENT */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-black/50 to-black/10" />

      {/* INPUT FORM */}
      <div className="xl:w-[65%] bg-white fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-12 flex flex-col items-center lg:w-[85%]">
        {/* ORIGINAL AUTH */}
        <div className="w-1/2 h-[85%] flex flex-col items-center gap-10">
          {/* TITLE */}
          <span className="w-full text-3xl text-center font-semibold text-primaryBlack">
            Log In
          </span>
          {/* FORM */}
          <FormLogin />
        </div>

        {/* LINE */}
        <div className="w-1/2 h-6 relative flex my-3">
          <div className="w-full h-[1px] bg-lightGrey m-auto" />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex bg-transparent rounded-full text-sm text-darkGrey">
            <span className="w-6 h-6 bg-white m-auto rounded-full flex justify-center items-center">
              Or
            </span>
          </div>
        </div>

        {/* GOOGLE AUTH */}
        <div className="w-full flex h-[15%]">
          <button
            type="button"
            className="w-[45%] m-auto flex justify-center items-center gap-6 bg-white text-darkGrey border-[1px] border-darkGrey  py-3 rounded-lg"
          >
            <FcGoogle className="text-3xl" />
            <span className="text-lg font-bold">Sign Up with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
