import React from "react";
import { Form } from "react-bootstrap";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import Cars from "../Cars/Cars.jsx";
// import { SelectComponent } from "./SelectComponent.jsx";
import "./Options.scss";

const Options = () => {
  const sortCars = () => {};

  return (
    <div className="Options">
      <div className="wrapper">
        <h2 className="Options__title">CURRENT OFFERS</h2>
        <div className="Options__selects">
          <Form.Select className="Options__select">
            <option>Year</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
          </Form.Select>

          <Form.Select className="Options__select">
            <option>Make</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

          <Form.Select className="Options__select">
            <option>Model</option>
            <option value="Volkswagen Tiguan">Volkswagen Tiguan</option>
            <option value="Toyota Highlander XLE">
              Toyota Highlander LE A...
            </option>
            <option value="Toyota Highlander XLE">Toyota Highlander XLE</option>
            <option value="Toyota Venza AWD XLE...">
              Toyota Venza AWD XLE...
            </option>
            <option value="Lexus RX 350 LUXURY">Lexus RX 350 LUXURY</option>
            <option value="Lexus RX 350 F-SPORT LUXURY">
              Lexus RX 350 F-SPORT
            </option>
            <option value="Hyundai Elantra">Hyundai Elantra</option>
            <option value="Hyundai Elantra">Hyundai Elantra</option>
            <option value="Mercedes-Benz GLE-Cl...">
              Mercedes-Benz GLE-Cl...
            </option>
          </Form.Select>

          <Form.Select className="Options__select">
            <option>Trim</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

          <Form.Select className="Options__select">
            <option>Mileage</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

          <button className="Options__button" onClick={() => sortCars()}>
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
