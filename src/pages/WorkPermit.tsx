import React, { useEffect, useState } from 'react';
import './WorkPermit.css';

// ✅ Rename the type to avoid conflict
interface IWorkPermit {
  visaStatus: string;
  expiryDate: string;
  additionalInfo?: string;
}

const WorkPermit: React.FC = () => {
  const [workPermitData, setWorkPermitData] = useState<IWorkPermit | null>(null);

  useEffect(() => {
    // Replace with actual API call if needed
    setWorkPermitData({
      visaStatus: "Skilled Worker Visa",
      expiryDate: "2026-05-15",
      additionalInfo: "Eligible for sponsorship and potential visa extension."
    });
  }, []);

  if (!workPermitData) return <div>Loading...</div>;

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">🎓 Work Permit</h2>
        <p className="work-permit-summary">
          I'm currently on a <strong>{workPermitData.visaStatus}</strong> 🛂, which allows me to work in the UK! 🇬🇧 
          My visa is valid until <strong>{new Date(workPermitData.expiryDate).toLocaleDateString()}</strong> 📅, 
          giving me the opportunity to build valuable experience and grow my career here. 🌟
        </p>
        {workPermitData.additionalInfo && (
          <p className="additional-info">{workPermitData.additionalInfo}</p>
        )}
      </div>
    </div>
  );
};

export default WorkPermit;
