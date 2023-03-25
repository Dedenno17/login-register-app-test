import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer/Index';
import Header from '../components/Header';
import ExperienceUser from '../components/Profile/ExperienceUser';
import FormExperience from '../components/Profile/FormExperience';
import Hero from '../components/Profile/Hero';
import ProfileStatus from '../components/Profile/ProfileStatus';
import ProfileUser from '../components/Profile/ProfileUser';

const Profile: React.FC = () => {
  // state of pop up experience
  const [isShow, setIsShow] = useState<boolean>(false);

  // state portal
  const portal = document.getElementById('portal');

  return (
    <div className="w-full bg-primaryGrey">
      <Header />
      <div className="w-full min-h-screen">
        {/* HERO */}
        <Hero />

        {/* CONTENT */}
        <div className="flex flex-col gap-6 p-6">
          <ProfileUser />
          <div className="w-full flex gap-6">
            <ProfileStatus />
            <ExperienceUser onOpen={setIsShow} />
          </div>
        </div>

        {/* POP UP EXPERIENCE FORM */}
        {isShow && portal && (
          <FormExperience onClose={setIsShow} portal={portal} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
