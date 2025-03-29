import React, { useEffect, useState } from 'react';
import './Skills.css';

import { FaReact, FaNodeJs, FaAws, FaDocker, FaJava } from 'react-icons/fa';
import { SiRubyonrails, SiTypescript, SiPostgresql, SiMysql, SiKubernetes, SiGooglecloud, SiSpringboot, SiPhp, SiNetlify, SiHeroku, SiRabbitmq, SiImessage } from 'react-icons/si';

const iconMap: { [key: string]: JSX.Element } = {
  SiRubyonrails: <SiRubyonrails />,
  FaNodeJs: <FaNodeJs />,
  SiSpringboot: <SiSpringboot />,
  FaJava: <FaJava />,
  SiPhp: <SiPhp />,
  FaReact: <FaReact />,
  SiTypescript: <SiTypescript />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiKubernetes: <SiKubernetes />,
  SiGooglecloud: <SiGooglecloud />,
  SiHeroku: <SiHeroku />,
  SiNetlify: <SiNetlify />,
  SiRabbitmq: <SiRabbitmq />,
  SiImessage: <SiImessage />,
};

// Define the Skill type
interface Skill {
  name: string;
  icon: string;
  category: string;
  description: string;
}

const Skills: React.FC = () => {
  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    // Replace with actual skill data
    setSkillsData([
      { name: "React", icon: "FaReact", category: "Frontend", description: "A JavaScript library for building UI." },
      { name: "Node.js", icon: "FaNodeJs", category: "Backend", description: "JavaScript runtime for server-side apps." },
      { name: "AWS", icon: "FaAws", category: "Cloud", description: "Amazon Web Services for cloud computing." },
      { name: "Docker", icon: "FaDocker", category: "DevOps", description: "Containerization for applications." },
      { name: "PostgreSQL", icon: "SiPostgresql", category: "Databases", description: "Advanced SQL database." },
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
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter, i) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
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
