import React, { useState } from 'react';
import './App.css';
import { useKeyboard } from './hooks/useKeyboard';

function App() {
  const [pressedKey, setPressedKey] = useState<string | null>("");

  useKeyboard(setPressedKey);

  return (
    <div className="App">
      <h1>{pressedKey}</h1>
    </div>
  );
}

export default App;
