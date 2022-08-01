import React, { useEffect, useState } from "react";
import plus from '../../image/questions/plus.svg';
import minus from '../../image/questions/minus.svg';
import './Accordion.scss';

import "./Accordion.scss";

const Accordion = ({ heading, title, content}) => {
  const [isActive, setIsActive] = useState(false);
  const [activeImg, setActiveImg] = useState(plus);

  useEffect(() => {
    if (isActive) {
      setActiveImg(minus);
    } else {
      setActiveImg(plus);
    }
  }, [isActive])

  return (
    <li key={heading} className="Accordion-item">
      <div className="Accordion-toggle" onClick={() => setIsActive(!isActive)}>
        <h3 className="Accordion__title">{heading}</h3>
        <img src={activeImg} className="Accordion__open" alt="active"/>
      </div>
      {isActive && 
      <div className="Accordion__content">
        <h4 className="Accordion__description">{title}</h4>
        {(typeof content === "string") ?
        <p className="According__text">{content}</p>
        : content.map(item => (
          <p className="According__text">{item}</p>
        ))
        }

      </div>}
    </li>
  );
};

export default Accordion;