import { Header } from './components/Header/Header';
import './App.scss';
import './custom.scss';
import Options from './components/Options/Obtions';

export const App = () => {
  return (
    <div className="App">
      <Header/>
      <Options/>
    </div>
  );
};

