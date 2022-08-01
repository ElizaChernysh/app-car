import React, { useState } from "react";
import './Accordion.scss';

import "./Accordion.scss";

const Accordion = ({ heading, content, title }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className="Accordion-item">
      <div className="Accordion-toggle" onClick={() => setIsActive(!isActive)}>
        <h3 className="Accordion__title">{heading}</h3>
        <span className="Accordion__open">{isActive ? "-" : "+"}</span>
      </div>
      {isActive && 
      <div className="Accordion-content">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>}
    </li>
  );
};

export default Accordion;