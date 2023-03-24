import React, { ReactNode } from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { TfiInstagram } from 'react-icons/tfi';

const jobSeekerLinks: string[] = [
  'Jobs Categories',
  'Jobs By Companies',
  'Career Support',
  'Testimony',
  'Download App',
];

const recruitersLinks: string[] = [
  'Post a Job Adds',
  'Search For Resumes',
  'Advertise with Us',
  'Company Profiles',
];

const aboutLinks: string[] = ['About Us', 'News and Events', 'Career'];

const contactLinks: string[] = ['Contact Us', 'FAQ', 'Send Feedbacks'];

const SocialsLinks: ReactNode[] = [
  <FaFacebookF />,
  <AiOutlineLinkedin />,
  <FaTwitter />,
  <TfiInstagram />,
];

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1366px] px-20 py-12 flex flex-col">
        {/* LINKS */}
        <div className="flex items-start gap-12">
          {/* LOGO */}
          <div className="flex flex-col justify-center gap-10 w-[25%]">
            <div className="w-[10%]">
              <h1 className="text-3xl text-darkGrey font-bold">LOGO</h1>
            </div>
            <p className="text-md text-darkGrey">
              Nam posuere accumsan porta. Integer id orci sed ante tincidunt
              tincidunt sit amet sed libero.
            </p>
          </div>

          {/* JOBSEEKER */}
          <div style={{ flexGrow: 1 }}>
            <h2 className="text-lg font-bold text-darkGrey mb-4">JOB SEEKER</h2>
            <ul className="w-full flex flex-col gap-4">
              {jobSeekerLinks.map((item: string, i: number) => (
                <li
                  key={Math.random() + i + ''}
                  className="text-sm text-darkGrey cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RECRUITER */}
          <div style={{ flexGrow: 1 }}>
            <h2 className="text-lg font-bold text-darkGrey mb-4">RECRUITERS</h2>
            <ul className="w-full flex flex-col gap-4">
              {recruitersLinks.map((item: string, i: number) => (
                <li
                  key={Math.random() + i + ''}
                  className="text-sm text-darkGrey cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ABOUT */}
          <div style={{ flexGrow: 1 }}>
            <h2 className="text-lg font-bold text-darkGrey mb-4">ABOUT</h2>
            <ul className="w-full flex flex-col gap-4">
              {aboutLinks.map((item: string, i: number) => (
                <li
                  key={Math.random() + i + ''}
                  className="text-sm text-darkGrey cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACTS */}
          <div style={{ flexGrow: 1 }}>
            <h2 className="text-lg font-bold text-darkGrey mb-4">CONTACTS</h2>
            <ul className="w-full flex flex-col gap-4">
              {contactLinks.map((item: string, i: number) => (
                <li
                  key={Math.random() + i + ''}
                  className="text-sm text-darkGrey cursor-pointer"
                >
                  {item}
                </li>
              ))}
              <li className="flex flex-col gap-4">
                <span className="text-sm text-darkGrey">Socials</span>
                <span className="flex items-center gap-4">
                  {SocialsLinks.map((item: ReactNode) => (
                    <span
                      key={Math.random() + ''}
                      className="w-8 h-8 text-xl text-white bg-darkGrey rounded-full flex items-center justify-center"
                    >
                      {item}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHTS */}
        <div className="w-full py-1 text-sm text-darkGrey">
          &copy; LOGO {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Footer);
