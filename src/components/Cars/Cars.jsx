import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import './Cars.scss';

const Cars = () => {
  const cars = useSelector((state) => state.cars.cars);
  // const dispatch = useDispatch();
  console.log(cars);

  return (
    <div className='Cars wrapper'>
      <ul className='Cars__list'>
        {
          cars.map(car => (
            <li key={car.id} className="Cars__item">
            <img src={require(`../../image/images/${car.image}.jpg`)} alt="car"/>
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