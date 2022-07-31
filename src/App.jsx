import { Header } from './components/Header/Header';
import './App.scss';
import './custom.scss';
import Options from './components/Options/Obtions';

export const App = () => {
  return (
    <div className="App">
      <Header/>
      <Options/>
      {/* {
          Records.map(car => (
            <div key={car.id}>
              <img src={car.image} alt="cars"/>
              <p>
                <span>{car.year}{' '}</span>{car.model}
              </p>
              <p>{car.mileage}{' | '}Automatic{' | '}{car.trim}</p>
              <p>${car.make}</p>
            </div>
          ))
        }
        <p>Hi</p> */}
        
    </div>
  );
};

