import React, { useState } from 'react';
import './ContactMe.css';
import profilePic from '../images/avataar.png';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { ContactMe as IContactMe } from '../types';

const ContactMe: React.FC = () => {
  const [userData] = useState<IContactMe>({
    name: "Keira Antao",
    title: "Architectural Designer",
    summary: "Dedicated to innovative architectural solutions and sustainable design.",
    companyUniversity: "XYZ University",
    linkedinLink: "https://www.linkedin.com/in/keiraantao",
    email: "keira.architecture@example.com",
    phoneNumber: "+1234567890",
    profilePicture: { url: profilePic } 
  });

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={profilePic} alt="Keira Antao" className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{userData?.name}</h3>
          <p className="badge-title">{userData.title}</p>
          <p className="badge-description">{userData.summary}</p>
          <p className="badge-company">{userData.companyUniversity}</p>
          <p className="badge-location">
            <FaMapMarkerAlt className="location-icon" /> Qatar, Doha
          </p>
          <a
            href={userData.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>
      <div className="contact-header">
        <p>I'm always open to discussing new projects and ideas! Feel free to reach out.</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${userData.email}`} className="contact-link">
            {userData.email}
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:${userData.phoneNumber}`} className="contact-link">
            {userData.phoneNumber}
          </a>
        </div>
        <div className="contact-fun">
          <p>Or let's connect over a coffee ☕</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;