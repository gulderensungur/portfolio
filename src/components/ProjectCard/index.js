import React from "react";
import "./style.css";
function ProjectCard({ name, description, techStacks, thumbnail, liveUrl }) {
  return (
    <a className="card" href={liveUrl} target="_blank" rel="noreferrer">
      <div className="card-image">
        <img src={thumbnail} alt={`Project: ${name}`} />
      </div>
      <div className="card-info">
        <h3>{name}</h3>
        <p>{description}</p>

        <div className="tech-stacks">
          {techStacks.map((stack) => (
            <span className="tech-stack-item" key={stack}>
              {stack}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
