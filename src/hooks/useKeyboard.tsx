import { useCallback, useEffect } from 'react';

export const useKeyboard = (callback: (key: string) => void) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    callback(e?.key);

  }, [callback]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [handleKeyDown]);

  return handleKeyDown;
}
