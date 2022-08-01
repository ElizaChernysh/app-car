import { Header } from './components/Header/Header';
import './App.scss';
import './custom.scss';
import Options from './components/Options/Obtions';
import InputEmail from './components/InputEmail/InputEmail';
import Questions from './components/Questions/Questions';
import Footer from './components/Footer/Footer'

export const App = () => {
  return (
    <div className="App">
      <Header/>
      <Options/>
      <InputEmail/>
      <Questions/>
      <Footer/>
    </div>
  );
};

