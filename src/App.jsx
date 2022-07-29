import { Header } from './components/Header/Header';
import './App.scss';
import './custom.scss';
import Cars from './components/Cars/Cars';

export const App = () => {
  return (
    <div className="App">
      <Header/>
      <Cars/>
    </div>
  );
};

