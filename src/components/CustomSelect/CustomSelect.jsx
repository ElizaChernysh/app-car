import React, { useEffect, useState } from "react";
import arrowAscending from "../../image/arrows/arrows-first.svg";
import arrowDescending from "../../image/arrows/arrows-second.svg";
import "./CustomSelect.scss";

export const CustomSelect = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const [arrowDirection, setArrowDirection] = useState("up");

  const optionsList = [
    "Publication date (descending)",
    "Price (ascending)",
    "Price (descending)",
    "Mileage (ascending)",
    "Mileage (descending)",
    "Performance (ascending)",
    "Performance (descending)",
  ];

  useEffect(() => {
    const value = optionsList[selectedOption];

    if (value.includes("ascending")) {
      setArrowDirection("up");
    } else if (value.includes("descending")) {
      setArrowDirection("down");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption]);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const setSelectedThenCloseDropdown = (index) => {
    setSelectedOption(index);
    setIsOptionsOpen(false);
  };

  const handleKeyDown = (index) => (e) => {
    switch (e.key) {
      case " ":
      case "SpaceBar":
      case "Enter":
        e.preventDefault();
        setSelectedThenCloseDropdown(index);
        break;
      default:
        break;
    }
  };

  const handleListKeyDown = (e) => {
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        setIsOptionsOpen(false);
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedOption(
          selectedOption - 1 >= 0 ? selectedOption - 1 : optionsList.length - 1
        );
        break;
      case "ArrowDown":
        e.preventDefault();
        setSelectedOption(
          selectedOption === optionsList.length - 1 ? 0 : selectedOption + 1
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="CustomSelect wrapper">
     
      <div className="CustomSelect__container">
        <div className="CustomSelect__preview">
          <span className="CustomSelect__text">Sort by</span>

          {arrowDirection === "up" ? (
            <img className="CustomSelect__arrows" src={arrowAscending} alt="up" />
          ) : (
            <img className="CustomSelect__arrows" src={arrowDescending} alt="down" />
          )}

          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={isOptionsOpen}
            className={
              isOptionsOpen
                ? "CustomSelect__button expanded"
                : "CustomSelect__button"
            }
            onClick={toggleOptions}
            onKeyDown={handleListKeyDown}
          >
            {optionsList[selectedOption]}
          </button>
        </div>

        <ul
          className={`options ${isOptionsOpen ? "show" : ""}`}
          role="listbox"
          aria-activedescendant={optionsList[selectedOption]}
          tabIndex={-1}
          onKeyDown={handleListKeyDown}
        >
          {optionsList.map((option, index) => (
            <li
              id={option}
              role="option"
              aria-selected={selectedOption === index}
              tabIndex={0}
              onKeyDown={handleKeyDown(index)}
              onClick={() => {
                setSelectedThenCloseDropdown(index);
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
