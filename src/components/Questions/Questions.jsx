import React from "react";
import Accordion from "./Accordion.jsx";
import { accordionData } from "./data";
import './Questions.scss';

const Questions = () => {
  return (
    <div className="Questions">
      <div className="wrapper">
        <h2 className="Questions__title">Popular questions</h2>

        <ul className="accordion">
      {accordionData.map(({ heading, content }) => (
        <Accordion heading={heading} content={content} />
      ))}
    </ul>
      </div>
    </div>
  );
};

export default Questions;
