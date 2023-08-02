import {FC} from 'react';
import './App.css';
import {Footer} from './pages/footer/Footer';
import {Header} from './pages/header/Header';
import {Main} from './pages/main/Main';

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
