import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProfilePage.css';

import ProfileBanner from './ProfileBanner';


const ProfilePage: React.FC = () => {
  const location = useLocation();
  const backgroundGif = location.state?.backgroundGif || "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif"; // Default GIF

  return (
    <>
      <div
        className="profile-page"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      >
        <ProfileBanner
        />
      </div>

    </>
  );
};

export default ProfilePage;
