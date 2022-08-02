import React, {useState} from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getCarsByYear, getCarsByTrim, getCarsByModel, getCarsByMileage, getAllCars} from "../../store/reducers/carsSlice";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import Cars from "../Cars/Cars.jsx";
// import { SelectComponent } from "./SelectComponent.jsx";
import "./Options.scss";

const Options = () => {
  const [yearOption, setYearOption] = useState('Year');
  const [trimOption, setTrimOption] = useState('Trim');
  const [modelOption, setModelOption] = useState('Model');
  const [mileageOption, setMileageOption] = useState('Mileage');

  const dispatch = useDispatch();

  const handleChangeYear = (e) => {
    setYearOption(e.target.value);
    dispatch(getCarsByYear(e.target.value))
  }

  const handleChangeTrim = (e) => {
    setTrimOption(e.target.value);
    dispatch(getCarsByTrim(e.target.value))
  }

  const handleChangeModel = (e) => {
    setModelOption(e.target.value);
    dispatch(getCarsByModel(e.target.value));
  }

  const handleChangeMileage = (e) => {
    setMileageOption(e.target.value);
    dispatch(getCarsByMileage(e.target.value));
  }

  return (
    <div className="Options">
      <div className="wrapper">
        <h2 className="Options__title">CURRENT OFFERS</h2>
        <div className="Options__selects">
          <Form.Select 
            className="Options__select" 
            onChange={event => handleChangeYear(event)}
            value={yearOption} 
            >
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
            <option value="Honda">Honda</option>
            <option value="Kia">Kia</option>
            <option value="Toyota">Three</option>
            <option value="Volkswagen">Three</option>
          </Form.Select>

          <Form.Select
            onChange={(event) => handleChangeModel(event)}
            value={modelOption}
            className="Options__select"
          >
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
            <option value="Lexus RX 350 F-SPORT">
              Lexus RX 350 F-SPORT
            </option>
            <option value="Hyundai Elantra">Hyundai Elantra</option>
            <option value="Hyundai Elantra">Hyundai Elantra</option>
            <option value="Mercedes-Benz GLE-Cl...">
              Mercedes-Benz GLE-Cl...
            </option>
          </Form.Select>

          <Form.Select 
            className="Options__select"
            onChange={(event) => handleChangeTrim(event)}
            value={trimOption}
          >
            <option>Trim</option>
            <option value="Diesel">Diesel</option>
            <option value="Gas">Gas</option>
          </Form.Select>

          <Form.Select 
            className="Options__select"
            onChange={(event) => handleChangeMileage(event)}
            value={mileageOption}
          >
            <option>Mileage</option>
            <option value="0-50000">0 - 50000</option>
            <option value="50000-100000">50000 - 100000</option>
            <option value="100000-150000">100000 - 150000</option>
          </Form.Select>

          <button className="Options__button" onClick={() => dispatch(getAllCars())}>
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
