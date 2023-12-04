import React, {useCallback, useEffect, useState} from 'react';

export const useIsTabVisible = () => {
  const [isTabVisible, setIsTabVisible] = useState<boolean>(true);

  const visibilityChange = useCallback(() => {
    setIsTabVisible(document.visibilityState === 'visible');
  }, []);

  useEffect(() => {
    document.addEventListener('visibilitychange', visibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', visibilityChange);
    };
  }, []);

  return isTabVisible;
};
