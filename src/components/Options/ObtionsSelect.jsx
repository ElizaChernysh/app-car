// import { Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCarsByYear, getCarsByTrim, getCarsByModel, getCarsByMileage } from "../../store/reducers/carsSlice.jsx";
import './ObtionsSelect.scss';

export const OptionComponent = ({list, title, changes}) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const [activeOption, setActiveOption] = useState(title);

  const dispatch = useDispatch();

  const optionsList = list;

  useEffect(() => {
    if (changes === "byYear") {
      dispatch(getCarsByYear(activeOption))
    } else if (changes === "byTrim") {
      dispatch(getCarsByTrim(activeOption))
    } else if (changes === "byModel") {
      dispatch(getCarsByModel(activeOption))
    } else if (changes === "byMileage") {
      dispatch(getCarsByMileage(activeOption))
    }
  }, [activeOption, changes, dispatch]);

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
          className={activeOption !== title ? "OptionComponent__button   OptionComponent__expanded" : "OptionComponent__button"}
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
                setActiveOption(optionsList[index]);
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
