import React from "react";
import Section from "../Section";
import "./style.css";

const ResumeList = ({ title, list }) => {
  return (
    <ul>
      <h3 className="resume--list-header">{title}</h3>
      {list.map((item) => (
        <li className="resume--list-item" key={item.id}>
          {item.title && <p className="resume--list-title">{item.title}</p>}
          {item.interval && (
            <p className="resume--list-interval">{item.interval}</p>
          )}
          {item.subtitle && (
            <p className="resume--list-subtitle">{item.subtitle}</p>
          )}
        </li>
      ))}
    </ul>
  );
};

const SimpleList = ({ title, list }) => {
  return (
    <ul>
      <h3 className="resume--list-header">{title}</h3>
      {list.map((item) => (
        <li className="resume--simple-list-item" key={item.id}>
          {item.title && <p className="resume--list-subtitle">{item.title}</p>}
        </li>
      ))}
    </ul>
  );
};

const workExperiences = [
  {
    id: 3,
    title: "Sarp Aviation and Logistics",
    subtitle: "Intern",
    interval: "September 2021 - January 2022",
  },
  {
    id: 2,
    title: "SmartBiz",
    subtitle: "Intern",
    interval: "March 2021 - August 2021",
  },
  {
    id: 1,
    title: "Muğla Sıtkı Koçman University",
    subtitle: "Intern",
    interval: "July 2020 - September 2020",
  },
];

const educations = [
  {
    id: 0,
    title: "Muğla Sıtkı Koçman University",
    subtitle: "Computer Engineering (English)",
    interval: "October 2015 - January 2022",
  },
  {
    id: 1,
    title: "Muğla Anatolian Teachers Highschool",
    interval: "October 2015 - January 2022",
  },
];

const skills = [
  {
    id: 0,
    title: "HTML",
  },
  {
    id: 1,
    title: "CSS",
  },
  {
    id: 2,
    title: "Javascript",
  },
  {
    id: 3,
    title: "React",
  },
];

const tools = [
  {
    id: 0,
    title: "GIT",
  },
  {
    id: 1,
    title: "Figma",
  },
];

function Resume() {
  return (
    <Section id="resume" title="Resume" className="resume-section">
      <ResumeList title="Work Experience" list={workExperiences} />
      <ResumeList title="Education" list={educations} />
      <SimpleList title="Skills" list={skills} />
      <SimpleList title="Tools" list={tools} />
    </Section>
  );
}

export default Resume;
