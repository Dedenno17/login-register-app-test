import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { BsCheckLg } from 'react-icons/bs';
import { useAppSelector } from '../../store/hooks';

interface Props {
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
  // global state
  const user = useAppSelector((state) => state.login.currentUser);

  // state of form
  const [country, setCountry] = useState<string>('');
  const [jobTitle, setJobTitle] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [currentJob, setCurrentJob] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<{
    startMonth: string;
    startYear: string;
  }>({ startMonth: '', startYear: '' });
  const [endDate, setEndDate] = useState<{ endMonth: string; endYear: string }>(
    { endMonth: '', endYear: '' }
  );
  const [description, setDescription] = useState<string>('');
  const [isReadyToSubmit, setIsReadyToSubmit] = useState<boolean>(false);

  // if ready to submit
  useEffect(() => {
    const validCountry = country.trim().length !== 0;
    const validJobTitle = jobTitle.trim().length !== 0;
    const validCompanyName = companyName.trim().length !== 0;
    const validStartDate =
      startDate.startMonth.trim().length !== 0 &&
      startDate.startYear.trim().length !== 0;
    const validDescription = description.trim().length !== 0;

    const validForm =
      validCountry &&
      validCompanyName &&
      validJobTitle &&
      validStartDate &&
      validDescription;

    if (validForm) {
      setIsReadyToSubmit(true);
    } else {
      setIsReadyToSubmit(false);
    }
  }, [country, jobTitle, companyName, startDate, description]);

  // function submit
  const submitHandler = () => {
    const validCountry = country.trim().length !== 0;
    const validJobTitle = jobTitle.trim().length !== 0;
    const validCompanyName = companyName.trim().length !== 0;
    const validStartDate =
      startDate.startMonth.trim().length !== 0 &&
      startDate.startYear.trim().length !== 0;
    const validDescription = description.trim().length !== 0;

    const validForm =
      validCountry &&
      validCompanyName &&
      validJobTitle &&
      validStartDate &&
      validDescription;

    if (!validForm) {
      return;
    }

    const newExperience = {
      country,
      createdBy: user?.token,
      jobTitle,
      companyName,
      currentJob,
      start: startDate,
      end: currentJob ? null : endDate,
      description,
    };

    alert('added Experience Successfully!');
    console.log(newExperience);
  };

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
            value={country}
            onChange={(e) => setCountry(e.target.value)}
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
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Enter a position or title"
            required
            className="w-full px-3 py-2 border-[1px] border-lightGrey rounded-md outline-none"
          />
        </div>

        {/* COMPANY NAME */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="companyName" className="text-lg text-darkGrey">
            Company
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="ex. Microsoft"
            required
            className="w-full px-3 py-2 border-[1px] border-lightGrey rounded-md outline-none"
          />
        </div>

        {/* CURRENT JOB */}
        <div className="w-full flex items-center gap-4">
          <div
            className="w-8 h-8 border-sm bg-lighterGrey relative flex cursor-pointer rounded-md overflow-hidden"
            style={{ boxShadow: 'inset 2px 2px 4px 0 rgb(0 0 0 / 0.05)' }}
          >
            <BsCheckLg
              className={`text-xl text-white w-full h-full bg-primaryRed ${
                currentJob ? 'visible' : 'invisible'
              }`}
            />
            <input
              type="checkbox"
              className="absolute top-0 left-0 right-0 bottom-0 opacity-0"
              onChange={(e) => setCurrentJob(e.target.checked)}
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
              name="startMonth"
              value={startDate.startMonth}
              onChange={(e) =>
                setStartDate({
                  startMonth: e.target.value,
                  startYear: startDate.startYear,
                })
              }
              placeholder="Enter a month"
              required
              className="w-full px-3 py-2 border-[1px] border-lightGrey rounded-md outline-none"
            />
            <input
              type="text"
              name="startYear"
              value={startDate.startYear}
              onChange={(e) =>
                setStartDate({
                  startMonth: startDate.startMonth,
                  startYear: e.target.value,
                })
              }
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
              name="endMonth"
              value={endDate.endMonth}
              onChange={(e) =>
                setEndDate({
                  endMonth: e.target.value,
                  endYear: endDate.endYear,
                })
              }
              placeholder="Enter a month"
              required
              className={`w-full px-3 py-2 border-[1px] border-lightGrey rounded-md outline-none ${
                currentJob ? 'pointer-events-none bg-lighterGrey' : ''
              }`}
            />
            <input
              type="text"
              name="endYear"
              value={endDate.endYear}
              onChange={(e) =>
                setEndDate({
                  endMonth: endDate.endMonth,
                  endYear: e.target.value,
                })
              }
              placeholder="Enter a year"
              required
              className={`w-full px-3 py-2 border-[1px] border-lightGrey rounded-md outline-none ${
                currentJob ? 'pointer-events-none bg-lighterGrey' : ''
              }`}
            />
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="w-full flex flex-col gap-2">
          <h3 className="text-lg text-darkGrey">Description</h3>
          <textarea
            className="w-full rounded-md px-3 py-2 border-[1px] border-lightGrey"
            cols={20}
            rows={10}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </form>

      {/* BUTTON */}
      <div className="w-full h-[15%] py-2 flex border-t-[1px] border-t-lightGrey">
        <button
          type="button"
          className={`w-[60%]  py-2 text-white text-xl font-bold m-auto cursor-pointer rounded-md ${
            isReadyToSubmit
              ? 'bg-primaryRed cursor-pointer'
              : 'bg-lighterGrey cursor-not-allowed'
          }`}
          onClick={submitHandler}
        >
          Save
        </button>
      </div>
    </div>
  );
};

const FormExperience: React.FC<Props> = ({ onClose, portal }) => {
  return (
    <>
      {createPortal(<BgPortal onClose={onClose} />, portal)}
      {createPortal(<FormComponent onClose={onClose} />, portal)}
    </>
  );
};

export default React.memo(FormExperience);
