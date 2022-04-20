import React from "react";
import "./style.css";

function Section({ title, children, className, id }) {
  return (
    <section id={id}>
      <h3 className="section-title">{title}</h3>
      <div className={className}>{children}</div>
    </section>
  );
}

export default Section;
