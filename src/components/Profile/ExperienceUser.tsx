import React, { useEffect } from 'react';
import { allExperience } from '../../store/apiCalls';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Experience } from '../../types';

interface Props {
  onOpen: (status: boolean) => void;
}

const topbarLinks: string[] = [
  './experience.svg',
  './education.svg',
  './skills.svg',
  './post.svg',
  './contact.svg',
];

const ExperienceUser: React.FC<Props> = ({ onOpen }) => {
  //   const dispatch = useAppDispatch();

  // global state
  //   const { experiences, isFetching, error } = useAppSelector(
  //     (state) => state.experience
  //   );

  // fetching data of all experience
  // useEffect(() => {
  //   allExperience(dispatch);
  // }, []);

  // useEffect(() => {
  //   console.log(error);
  // }, [error]);

  // useEffect(() => {
  //   console.log(experiences);
  // }, [experiences]);

  return (
    <div className="w-[60%] bg-white p-7 flex flex-col rounded-lg">
      {/* TOPBAR */}
      <ul className=" flex justify-between items-center border-b-2 border-b-lightGrey">
        {topbarLinks.map((item: string, i: number) => (
          <li
            key={Math.random() + ''}
            className={`w-[20%] flex items-center justify-center pb-6 ${
              i === 0 && 'border-b-2 border-b-primaryRed'
            } `}
          >
            <img
              src={item}
              alt={item}
              className={`w-[20%] h-[20%] ${
                i === 0 ? 'text-darkGrey ' : 'text-lightGrey'
              }`}
            />
          </li>
        ))}
      </ul>

      {/* CONTENT */}
      <div className="w-full flex flex-col mt-6 relative">
        <h3 className="text-2xl font-bold text-darkGrey">Experience (20)</h3>
        <ul className="w-full flex flex-col">
          {/* {experiences.length !== 0 &&
            experiences.map((item: Experience) => (
              <li
                key={item._id}
                className="py-6 flex gap-6 border-b-[1px] border-b-darkGrey"
              >
                <div className="w-[10%]">
                  <img src="./TI.png" alt="TI" className="object-cover" />
                </div>
                <div className="w-[90%] flex flex-col gap-5">
                  <div className="w-full">
                    <h4 className="text-2xl font-semibold text-darkGrey">
                      {item.createdBy.jobTitle}
                    </h4>
                    <p className="text-xl text-lightGrey">
                      {item.companyName} - Fulltime
                    </p>
                    <p className="text-xl text-lightGrey">
                      {item.createdBy.start} -{' '}
                      {item.createdBy.currentJob
                        ? 'Present'
                        : item.createdBy.end}
                    </p>
                    <p className="text-xl text-lightGrey">
                      Ruka Artha Gading, North Jakarta
                    </p>
                  </div>
                  <p className="text-xl text-darkGrey">
                    {item.createdBy.description}
                    <span className="font-bold text-lightGrey cursor-pointer">
                      ...see more
                    </span>
                  </p>
                </div>
              </li>
            ))} */}

          {/* {experiences.length === 0 && (
            <span className="text-lg text-darkGrey font-bold">
              There are no Experience
            </span>
          )} */}

          <li className="py-6 flex gap-6 border-b-[1px] border-b-darkGrey">
            <div className="w-[10%]">
              <img src="./TI.png" alt="TI" className="object-cover" />
            </div>
            <div className="w-[90%] flex flex-col gap-5">
              <div className="w-full">
                <h4 className="text-2xl font-semibold text-darkGrey">
                  UI/UX Designer
                </h4>
                <p className="text-xl text-lightGrey">
                  Talent Insider - Fulltime
                </p>
                <p className="text-xl text-lightGrey">Aug 2020 - Present</p>
                <p className="text-xl text-lightGrey">
                  Ruka Artha Gading, North Jakarta
                </p>
              </div>
              <p className="text-xl text-darkGrey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis accumsan, risus sem sollicitudin lacus, ut interdum
                tellus elit risus sem sollicit udin dolor sit amet, con{' '}
                <span className="font-bold text-lightGrey cursor-pointer">
                  ...see more
                </span>
              </p>
            </div>
          </li>
        </ul>

        <span
          className="absolute top-0 right-0 flex justify-center items-center text-lightGrey font-bold text-4xl cursor-pointer"
          onClick={() => onOpen(true)}
        >
          +
        </span>
      </div>
    </div>
  );
};

export default React.memo(ExperienceUser);
