import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';

const WorkExperience: React.FC = () => {
  const [timeLineData] = useState([
    {
      title: "Set Design, ADA Dramatics",
      name: "Manipal Academy Of Higher Education",
      dateRange: "2025",
      timelineType: "work",
      summaryPoints: [
        "Designed immersive stage setups for dramatic performances.",
        "Integrated architectural principles into set design."
      ]
    },
    {
      title: "Director of Debate",
      name: "DPS- Modern Indian School, Doha",
      dateRange: "2022-2023",
      timelineType: "work",
      summaryPoints: [
        "Led and organized debate competitions.",
        "Trained students in critical thinking and public speaking."
      ]
    },
    {
      title: "Director of Publications",
      name: "DPS- Modern Indian School, Doha",
      dateRange: "2021-2022",
      timelineType: "work",
      summaryPoints: [
        "Managed school publications and editorial content.",
        "Coordinated with teams to produce quality written content."
      ]
    },
    {
      title: "Adjudicator",
      name: "Qatar Debate",
      dateRange: "2021-2022",
      timelineType: "work",
      summaryPoints: [
        "Evaluated and judged debate competitions.",
        "Provided constructive feedback to participants."
      ]
    },
    {
      title: "Bachelor of Architecture",
      name: "Manipal School of Architecture & Planning",
      dateRange: "2023-2028",
      timelineType: "education",
      summaryPoints: "Currently pursuing a Bachelor's degree in Architecture."
    },
    {
      title: "High School Diploma",
      name: "DPS- Modern Indian School, Doha",
      dateRange: "2017-2023",
      timelineType: "education",
      summaryPoints: "Graduated with a GPA of 9.2/10, specialized in architecture-related subjects."
    }
  ]);

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
            contentStyle={{
              background: item.timelineType === "work" ? 'rgb(33, 150, 243)' : 'rgb(255, 224, 230)',
              color: '#fff'
            }}
            contentArrowStyle={{
              borderRight: item.timelineType === "work" ? '7px solid rgb(33, 150, 243)' : '7px solid rgb(255, 224, 230)'
            }}
            date={item.dateRange}
            iconStyle={{
              background: item.timelineType === "work" ? 'rgb(33, 150, 243)' : 'rgb(255, 160, 200)',
              color: '#fff'
            }}
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            <div style={{ color: 'black' }}>
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
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