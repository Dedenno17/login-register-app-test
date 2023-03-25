import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { BsCheckLg } from 'react-icons/bs';

interface Props {
  children?: ReactNode;
  onClose: (status: boolean) => void;
  portal?: any;
}

// bg component
const BgPortal: React.FC<Props> = ({ onClose }) => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-black/50 to-black/10 z-10"
      onClick={() => onClose(false)}
    />
  );
};

// form component
const FormComponent: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="bg-white max-w-[768px] max-h-[640px] flex flex-col fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-lg z-20">
      {/* TITLE */}
      <div className="w-full h-[15%] py-2 px-5 flex flex-col justify-evenly relative border-b-[1px] border-b-lightGrey">
        <div className="w-full text-center text-2xl text-darkGrey font-semibold">
          Add Experience
        </div>
        <div className="w-full text-center text-lg text-darkGrey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
        </div>
        <div
          className="absolute top-2 right-3 text-2xl text-darkGrey font-semibold cursor-pointer"
          onClick={() => onClose(false)}
        >
          X
        </div>
      </div>

      {/* FORM */}
      <form className="w-[90%] mx-auto my-5 h-[70%] pr-4 flex flex-col gap-8 overflow-y-auto scrollbar scrollbar-track-lighterGrey scrollbar-track-rounded-lg scrollbar-thumb-lightGrey scrollbar-thumb-rounded-lg">
        {/* COUNTRY */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="country" className="text-lg text-darkGrey">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            //   value={country}
            onChange={(e) => {}}
            placeholder="Enter a Country"
            required
            className="w-full px-3 py-2 border-[1px] border-lightGrey rounded-md outline-none"
          />
        </div>

        {/* JOB TITLE */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="jobTitle" className="text-lg text-darkGrey">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            //   value={jobTitle}
            onChange={(e) => {}}
            placeholder="Enter a position or title"
            required
            className="w-full px-3 py-2 border-[1px] border-lightGrey rounded-md outline-none"
          />
        </div>

        {/* COMPANY NAME */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="company" className="text-lg text-darkGrey">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            //   value={company}
            onChange={(e) => {}}
            placeholder="ex. Microsoft"
            required
            className="w-full px-3 py-2 border-[1px] border-lightGrey rounded-md outline-none"
          />
        </div>

        {/* CURRENT JOB */}
        <div className="w-full flex items-center gap-4">
          <div
            className="w-8 h-8 border-sm bg-lighterGrey relative flex "
            style={{ boxShadow: 'inset 2px 2px 4px 0 rgb(0 0 0 / 0.05)' }}
          >
            <BsCheckLg className="text-xl text-white w-full h-full bg-primaryRed" />
            <input
              type="checkbox"
              className="absolute top-0 left-0 right-0 bottom-0 opacity-0"
            />
          </div>
          <label htmlFor="email" className="text-lg text-darkGrey">
            I'm Currently Working Here
          </label>
        </div>

        {/* START DATE */}
        <div className="w-full flex flex-col gap-2 justify-between">
          <h3 className="text-lg text-darkGrey">Start Date</h3>
          <div className="w-full flex items-center gap-4">
            <input
              type="text"
              name="monthStart"
              //   value={monthStart}
              onChange={(e) => {}}
              placeholder="Enter a month"
              required
              className="w-full px-3 py-2 border-[1px] border-lightGrey rounded-md outline-none"
            />
            <input
              type="text"
              name="yearStart"
              //   value={yearStart}
              onChange={(e) => {}}
              placeholder="Enter a year"
              required
              className="w-full px-3 py-2 border-[1px] border-lightGrey rounded-md outline-none"
            />
          </div>
        </div>

        {/* END DATE */}
        <div className="w-full flex flex-col gap-2 justify-between">
          <h3 className="text-lg text-darkGrey">End Date</h3>
          <div className="w-full flex items-center gap-4">
            <input
              type="text"
              name="monthEnd"
              //   value={monthEnd}
              onChange={(e) => {}}
              placeholder="Enter a month"
              required
              className="w-full px-3 py-2 border-[1px] border-lightGrey rounded-md outline-none"
            />
            <input
              type="text"
              name="yearEnd"
              //   value={yearEnd}
              onChange={(e) => {}}
              placeholder="Enter a year"
              required
              className="w-full px-3 py-2 border-[1px] border-lightGrey rounded-md outline-none"
            />
          </div>
        </div>
      </form>

      {/* BUTTON */}
      <div className="w-full h-[15%] py-2 flex border-t-[1px] border-t-lightGrey">
        <button className="w-[60%] bg-primaryRed py-2 text-white text-xl font-bold m-auto cursor-pointer rounded-md">
          Save
        </button>
      </div>
    </div>
  );
};

const FormExperience: React.FC<Props> = ({ children, onClose, portal }) => {
  return (
    <>
      {createPortal(<BgPortal onClose={onClose} />, portal)}
      {createPortal(
        <FormComponent children={children} onClose={onClose} />,
        portal
      )}
    </>
  );
};

export default React.memo(FormExperience);
