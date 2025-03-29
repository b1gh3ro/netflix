import React, { useEffect, useState } from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';

interface ProfileBannerType {
  headline: string;
  profileSummary: string;
  resumeLink: string;
  linkedinLink: string;
}

const ProfileBanner: React.FC = () => {
  const [bannerData, setBannerData] = useState<ProfileBannerType | null>(null);

  useEffect(() => {
    // ✅ Replace DatoCMS with static data or another API call
    setBannerData({
      headline: "Welcome to My Portfolio",
      profileSummary: "Full-stack developer passionate about building innovative web applications.",
      resumeLink: "https://www.linkedin.com/in/keiraantao",
      linkedinLink: "https://www.linkedin.com/in/keiraantao"
    });
  }, []);

  if (!bannerData) return <div>Loading...</div>;

  const handlePlayClick = () => {
    window.open(bannerData.resumeLink, '_blank');
  };

  const handleLinkedinClick = () => { 
    window.open(bannerData.linkedinLink, '_blank');
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">{bannerData.headline}</h1>
        <p className="banner-description">{bannerData.profileSummary}</p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
