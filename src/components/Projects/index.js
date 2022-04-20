import React from "react";
import Section from "../Section";
import ProjectCard from "../ProjectCard";
import "./style.css";
import data from "./data.json";
const Projects = () => {
  return (
    <Section id="projects" title="Projects" className="cards">
      {data.projects.map((project) => (
        <ProjectCard
          key={project.id}
          name={project.name}
          description={project.description}
          techStacks={project.techStacks}
          thumbnail={project.thumbnail}
          liveUrl={project.liveUrl}
        />
      ))}
    </Section>
  );
};

export default Projects;
