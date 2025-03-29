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
  image: { url: string };
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects([
      {
        title: "Sustainable Housing Design",
        description: "Designed an eco-friendly housing complex with passive cooling and renewable materials.",
        techUsed: "Revit, Twinmotion, Photoshop",
        image: { url: "/images/sustainable-housing.png" },
      },
      {
        title: "Urban Redevelopment Plan",
        description: "Proposed a smart city layout integrating green spaces and mixed-use developments.",
        techUsed: "AutoCAD, SketchUp, Blender",
        image: { url: "/images/urban-plan.png" },
      },
      {
        title: "Museum Interior Visualization",
        description: "Created a high-fidelity interior rendering of a modern art museum using advanced visualization techniques.",
        techUsed: "Blender, Unreal Engine, Photoshop",
        image: { url: "/images/museum-interior.png" },
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
            <img src={project.image.url} alt={project.title} className="project-image" />
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