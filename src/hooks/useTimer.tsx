import React, { useRef, useEffect } from 'react';

export const useTimer = (stopState: boolean) => {
  const [seconds, setSeconds] = React.useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (stopState === true && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [stopState]);

  useEffect(() => {
    if (stopState === false) {
      intervalRef.current = setInterval(() => {
        setSeconds(prevSecond => prevSecond + 1);
      }, 1000);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [stopState]);

  return { seconds };
}
