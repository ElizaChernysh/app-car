import React from 'react';
import { useDispatch, useSelector } from "react-redux";

const Cars = () => {
  const cars = useSelector((state) => state.cars.cars);
  // const dispatch = useDispatch();
  console.log(cars);

  return (
    <div>
      <ul>
        {
          cars.map(car => (
            <li key={car.id}>
              <img src={car.image} alt="cars"/>
              <p>
                <span>{car.year}{' '}</span>{car.model}
              </p>
              <p>{car.mileage}{' | '}Automatic{' | '}{car.trim}</p>
              <p>${car.make}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Cars;