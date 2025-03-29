import React, { useEffect, useState } from 'react';
import './Skills.css';
import { FaDraftingCompass, FaUsers, FaLightbulb, FaMicrophone, FaComments } from 'react-icons/fa';
import { MdDesignServices, MdManageAccounts } from 'react-icons/md';

const iconMap = {
  ArchitecturalDesign: <MdDesignServices />, 
  Visualization: <FaDraftingCompass />, 
  CriticalThinking: <FaLightbulb />, 
  Communication: <FaMicrophone />, 
  TeamCollaboration: <FaUsers />, 
  DebateNegotiation: <FaComments />, 
  Leadership: <MdManageAccounts />,
};

interface Skill {
  name: string;
  icon: string;
  category: string;
  description: string;
}

const Skills: React.FC = () => {
  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    setSkillsData([
      { name: "Architectural Design", icon: "ArchitecturalDesign", category: "Design", description: "Expertise in spatial planning and innovative conceptualization." },
      { name: "Visualization", icon: "Visualization", category: "Design", description: "Proficiency in BIM modeling, parametric design, and real-time rendering." },
      { name: "Critical Thinking", icon: "CriticalThinking", category: "Cognitive Skills", description: "Ability to analyze and solve complex architectural problems." },
      { name: "Effective Communication", icon: "Communication", category: "Soft Skills", description: "Strong verbal and visual presentation skills." },
      { name: "Team Collaboration", icon: "TeamCollaboration", category: "Soft Skills", description: "Experience working in interdisciplinary teams for projects and competitions." },
      { name: "Debate & Negotiation", icon: "DebateNegotiation", category: "Leadership", description: "Proven ability in adjudicating and participating in debates." },
      { name: "Leadership & Organization", icon: "Leadership", category: "Leadership", description: "Experience managing events and leading student organizations." },
    ]);
  }, []);

  if (skillsData.length === 0) return <div>Loading...</div>;

  const skillsByCategory = skillsData.reduce((acc: Record<string, Skill[]>, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill, idx) => (
              <div key={idx} className="skill-card">
                <div className="icon">
  {iconMap[skill.icon as keyof typeof iconMap] || <FaLightbulb />}
</div>

                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;