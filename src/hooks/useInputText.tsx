import {useCallback, useEffect, useRef} from 'react';

export const useInputText = (callback: (key: string) => void) => {
  const inputText = useRef('');

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      e.preventDefault();

      if (e?.key?.length > 1 && e?.key !== 'Backspace') {
        return;
      }

      if (e?.key === 'Backspace') {
        inputText.current = inputText.current.slice(
          0,
          inputText.current.length - 1
        );
      } else {
        inputText.current += e?.key;
      }
      callback(inputText.current);
    },
    [callback]
  );

  const listenKeyboardEvents = () => {
    document.addEventListener?.('keydown', handleKeyDown);
  };

  const removeKeyboardEvents = () => {
    document.removeEventListener?.('keydown', handleKeyDown);
  };

  useEffect(() => {
    listenKeyboardEvents();

    return () => {
      removeKeyboardEvents();
    };
  }, []);

  const clearData = (): void => {
    inputText.current = '';
  };

  return {clearData, listenKeyboardEvents, removeKeyboardEvents};
};
