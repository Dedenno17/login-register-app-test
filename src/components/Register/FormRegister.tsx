import React from 'react';
import { Link } from 'react-router-dom';

const FormRegister: React.FC = () => {
  return (
    <form className="w-full gap-10 flex flex-col items-center">
      {/* INPUT */}
      <div className="w-full flex">
        {/* FORM LEFT */}
        <div className="w-1/2 flex flex-col gap-8 pr-8 border-r-[0.5px] border-r-lightGrey">
          {/* EMAIL */}
          <div className="w-full h-[26%] flex flex-col gap-2">
            <label htmlFor="email" className="text-lg text-darkGrey">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full px-3 py-2 border-[1px] border-lightGrey rounded-md outline-none"
            />
          </div>

          {/* PASSWORD */}
          <div className="w-full h-[26%] flex flex-col gap-2">
            <label htmlFor="password" className="text-lg text-darkGrey">
              Set Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              className="w-full px-3 py-2 border-[1px] border-lightGrey rounded-md outline-none"
            />
          </div>

          {/* PHONE NUMBER */}
          <div className="w-full h-[26%] flex flex-col gap-2">
            <label htmlFor="phoneNumber" className="text-lg text-darkGrey">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="+62xxxxxxxxxxx"
              className="w-full px-3 py-2 border-[1px] border-lightGrey rounded-md outline-none"
            />
          </div>
        </div>

        {/* FORM RIGHT */}
        <div className="w-1/2  flex flex-col gap-8 pl-8 border-l-[0.5px] border-l-lightGrey">
          {/* FIRST NAME */}
          <div className="w-full h-[26%] flex flex-col gap-2">
            <label htmlFor="firstName" className="text-lg text-darkGrey">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-3 py-2 border-[1px] border-lightGrey rounded-md outline-none"
            />
          </div>

          {/* LAST NAME */}
          <div className="w-full h-[26%] flex flex-col gap-2">
            <label htmlFor="lastName" className="text-lg text-darkGrey">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-3 py-2 border-[1px] border-lightGrey rounded-md outline-none"
            />
          </div>

          {/* USER TYPE */}
          <div className="w-full h-[26%] flex items-start justify-between">
            <div className="w-[45%] flex items-center gap-2">
              <div className="w-8 h-8 relative">
                <input
                  type="radio"
                  name="userType"
                  id="student"
                  value="student"
                  className="absolute w-full h-full bg-darkGrey"
                />
              </div>
              <label htmlFor="student" className="text-lg text-darkGrey">
                I'm a Student
              </label>
            </div>
            <div className="w-[55%] flex items-center gap-3">
              <div className="w-8 h-8 relative">
                <input
                  type="radio"
                  name="userType"
                  id="professional"
                  value="professional"
                  className="absolute w-full h-full bg-darkGrey"
                />
              </div>
              <label htmlFor="professional" className="text-lg text-darkGrey">
                I'm a Professional
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <button
          type="submit"
          className="w-[45%] bg-primaryRed text-white text-lg font-semibold py-3"
        >
          Sign Up
        </button>
        <span className="text-sm text-lightGrey">
          Already Have an Account?{' '}
          <Link to="/auth/login" className="text-sm text-darkGrey font-bold">
            Log In
          </Link>
        </span>
      </div>
    </form>
  );
};

export default React.memo(FormRegister);
