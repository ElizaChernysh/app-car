import React from 'react';
import { useSelector } from "react-redux";
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
            <img 
              className='Cars__image'
              src={require(`../../image/images/${car.image}.jpg`)} alt="car"/>
              <div className='Cars__container'>
              <p className='Cars__model'>
                <span className='Cars__year'>{car.year}</span>{car.model}
              </p>
              <p className='Cars__info'>{car.mileage}{' km'}{' | '}Automatic{' | '}{car.trim}</p>
              <p className='Cars__price'>${car.price}</p>
              </div>
            </li>
          ))
        }
      </ul>

    </div> 
  )
}

export default Cars;