import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  getAllCars,
} from "../../store/reducers/carsSlice";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { OptionComponent } from "./ObtionsSelect";
import Cars from "../Cars/Cars.jsx";
import { year, make, model, trim, mileage } from "./optionsList.jsx";
import "./Options.scss";

const Options = () => {
  const dispatch = useDispatch();
  
  return (
    <div className="Options">
      <div className="wrapper">
        <h2 className="Options__title">CURRENT OFFERS</h2>
        <div className="Options__selects">
          <OptionComponent list={year} title={"Year"} changes={"byYear"} />
          <OptionComponent list={make} title={"Make"} changes={"byMake"} />
          <OptionComponent list={model} title={"Model"} changes={"byModel"} />
          <OptionComponent list={trim} title={"Trim"} changes={"byTrim"} />
          <OptionComponent
            list={mileage}
            title={"Mileage"}
            changes={"byMileage"}
          />
          <button
            className="Options__button"
            onClick={() => dispatch(getAllCars())}
          >
            All
          </button>
        </div>
      </div>

      <CustomSelect />
      <Cars />
    </div>
  );
};

export default Options;
