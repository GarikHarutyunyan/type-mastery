import { FC } from 'react';

import './App.css';
import { Main } from './pages/main/Main';
import { Header } from './pages/header/Header';
import { Footer } from './pages/footer/Footer';

const App: FC = () => {

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
