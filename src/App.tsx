import React, { useState, FC } from 'react';
import { useKeyboard } from './hooks/useKeyboard';

import './App.css';

const App: FC = () => {
  const [pressedKey, setPressedKey] = useState<string>("");

  useKeyboard(setPressedKey);

  return (
    <div className="App">
      <h1>{pressedKey}</h1>
    </div>
  );
}

export default App;
