import React, { useRef, MouseEvent, useEffect } from 'react';

export const useTimer = () => {
  const [seconds, setSeconds] = React.useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleStop = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }

    setSeconds(0);
  };

  const handleBegin = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    intervalRef.current = setInterval(() => {
        setSeconds(prevSecond => prevSecond + 1);
    }, 1000);
  }

  useEffect(() => {
        intervalRef.current = setInterval(() => {
        setSeconds(prevSecond => prevSecond + 1);
        }, 1000);
        
        return () => {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
        };
}, []);

  return {seconds, handleBegin, handleStop};
}
