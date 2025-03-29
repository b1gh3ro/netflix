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
      profileSummary: "Aspiring architect and creative designer passionate about crafting immersive environments that inspire and transform. With a keen eye for spatial planning, architectural visualization, and storytelling through design, I strive to merge functionality with aesthetics. Recognized for excellence in architectural representation, BIM modeling, and real-time rendering, I bring a balance of creativity, precision, and technical expertise to every project. Eager to innovate and push boundaries in the world of architecture.",
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
          <MoreInfoButton onClick={handleLinkedinClick} label="My Portfolio" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
