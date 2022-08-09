// import { Form } from "react-bootstrap";
import React, { useState } from "react";
import './ObtionsSelect.scss';

export const OptionComponent = ({list}) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const [activeOption, setActiveOption] = useState('Year');

  const optionsList = list;

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const handleKeyDown = (index) => (e) => {
    switch (e.key) {
      case " ":
      case "SpaceBar":
      case "Enter":
        e.preventDefault();
        setSelectedOption(index);
        setIsOptionsOpen(false);
        break;
      default:
        break;
    }
};

  return (
    <div className="OptionComponent">
      <div className="OptionComponent__container">
        <button
          type="button"
          aria-haspopup="listbox"
          className={isOptionsOpen ? "OptionComponent__expanded" : ""}
          aria-expanded={isOptionsOpen}
          onClick={toggleOptions}
        >
          {activeOption}
        </button>
        <ul
          className={`OptionComponent__options ${isOptionsOpen ? "OptionComponent__show" : ""}`}
          role="listbox"
          aria-activedescendant={optionsList[selectedOption]}
          tabIndex={-1}
        >
          {optionsList.map((option, index) => (
            <li
              className="OptionComponent__item"
              id={option}
              role="option"
              aria-selected={selectedOption === index}
              tabIndex={0}
              onKeyDown={handleKeyDown(index)}
              onClick={() => {
                setSelectedOption(index);
                setIsOptionsOpen(false);
                setActiveOption(optionsList[index])
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
