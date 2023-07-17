import { useEffect } from 'react';
import { useTimer } from '../hooks/useTimer'

export const TimeBar = ({isStopped, textLength}: any) => {
  const {seconds} = useTimer(isStopped);

  const secToMin = seconds / 60;
  const WPM = (textLength / 5) / secToMin;

  useEffect(() => {
    if (isStopped === true) {
      console.log(`${WPM} WPM`);
      console.log(isStopped);
    }
  }, [WPM, isStopped]);

  return (
    <div>
      <h1>{seconds}</h1>
    </div>
  )
}
