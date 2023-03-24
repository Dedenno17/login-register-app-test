import React from 'react';
import Footer from '../components/Footer/Index';
import Header from '../components/Header';

const Profile: React.FC = () => {
  return (
    <div className="w-full bg-primaryGrey">
      <Header />
      <div className="w-full min-h-screen"></div>
      <Footer />
    </div>
  );
};

export default Profile;
