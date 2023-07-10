import React, { FC } from 'react';

import './App.css';
import { Main } from './pages/main/Main';
import { Header } from './pages/header/Header';

const App: FC = () => {

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
