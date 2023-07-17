import { useCallback, useEffect, useRef } from 'react';

export const useInputText = (callback: (key: string) => void) => {
  const inputText = useRef('')

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    e.preventDefault();
    if(e?.key === 'Shift'){
      return
    }

    if(e?.key === 'Backspace'){
      inputText.current = inputText.current.slice(0, inputText.current.length-1);  
    } else {
      inputText.current += e?.key;
    }
    callback(inputText.current);
    console.log(inputText.current);

  }, [callback]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [handleKeyDown]);

  return handleKeyDown;
}
