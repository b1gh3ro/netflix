import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';

// Define the TimelineItem type
interface TimelineItem {
  title: string;
  name: string;
  dateRange: string;
  timelineType: 'work' | 'education';
  techStack?: string;
  summaryPoints: string | string[];
}

const WorkExperience: React.FC = () => {
  const [timeLineData, setTimeLineData] = useState<TimelineItem[]>([]);

  useEffect(() => {
    setTimeLineData([
      {
        title: "Software Engineer",
        name: "Tech Corp",
        dateRange: "Jan 2022 - Present",
        timelineType: "work",
        techStack: "React, Node.js, AWS",
        summaryPoints: [
          "Developed scalable web applications.",
          "Implemented CI/CD pipelines.",
          "Optimized database performance."
        ]
      },
      {
        title: "Bachelor's in Computer Science",
        name: "XYZ University",
        dateRange: "2018 - 2022",
        timelineType: "education",
        summaryPoints: "Graduated with honors, specialized in AI and web development."
      }
    ]);
  }, []);

  if (timeLineData.length === 0) return <div>Loading...</div>;

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
              item.timelineType === "work"
                ? { background: index === 0 ? 'rgb(33, 150, 243)' : 'rgb(240, 240, 240)', color: '#fff' }
                : { background: 'rgb(255, 224, 230)', color: '#fff' }
            }
            contentArrowStyle={
              item.timelineType === "work"
                ? { borderRight: index === 0 ? '7px solid rgb(33, 150, 243)' : '7px solid rgb(240, 240, 240)' }
                : { borderRight: '7px solid rgb(255, 224, 230)' }
            }
            date={item.dateRange}
            iconStyle={
              item.timelineType === "work"
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : { background: 'rgb(255, 160, 200)', color: '#fff' }
            }
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            <div style={{ color: 'black' }}>
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
              {item.techStack && <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>}
              {Array.isArray(item.summaryPoints) ? (
                <ul>
                  {item.summaryPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{item.summaryPoints}</p>
              )}
            </div>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
