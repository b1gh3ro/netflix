import React, { useEffect, useState } from 'react';
import './Projects.css';
import { FaSketch } from 'react-icons/fa';
import { SiAutodesk, SiAdobephotoshop, SiBlender, SiUnrealengine, SiTwinmotion } from 'react-icons/si';

const techIcons: { [key: string]: JSX.Element } = {
  "AutoCAD": <SiAutodesk />,
  "Twinmotion": <SiTwinmotion />,
  "Blender": <SiBlender />,
  "Photoshop": <SiAdobephotoshop />,
  "SketchUp": <FaSketch />,
  "Unreal Engine": <SiUnrealengine />,
};

interface Project {
  title: string;
  description: string;
  techUsed: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects([
      {
        title: "Residence Design",
        description: "Designed a functional and sustainable residential space with optimized spatial planning, natural ventilation, and energy-efficient materials.",
        techUsed: "AutoCAD, Twinmotion, Photoshop",
      },
      {
        title: "Campus Design",
        description: "Conceptualized a dynamic and inclusive campus layout, integrating pedestrian-friendly pathways, green spaces, and multi-use academic zones.",
        techUsed: "SketchUp, Blender, Photoshop",
      },
      {
        title: "Resort Design",
        description: "Developed a luxurious resort master plan, focusing on seamless indoor-outdoor integration, landscape harmony, and experiential guest flow.",
        techUsed: "Blender, Unreal Engine, Photoshop",
      }
    ]);
  }, []);

  if (projects.length === 0) return <div>Loading...</div>;

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
