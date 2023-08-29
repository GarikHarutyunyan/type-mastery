import React, {useEffect, useRef} from 'react';

export const usePrevious = <T extends any>(value: T): T | null => {
  const previousValue = useRef<T | null>(null);

  useEffect(() => {
    return () => {
      previousValue.current = value;
    };
  }, [value]);

  return previousValue.current;
};
