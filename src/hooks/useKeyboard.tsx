import {useCallback, useEffect} from 'react';

export const useKeyboard = (callback: (key: string) => void) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      event.preventDefault();
      callback(event?.key);
    },
    [callback]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return handleKeyDown;
};
