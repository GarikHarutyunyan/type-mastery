import React from 'react'
import { useTimer } from '../hooks/useTimer'

export const TimerBar = () => {
  const {seconds, handleBegin, handleStop} = useTimer();

  return (
    <div>
      <h1>{seconds}</h1>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleBegin}>Begin</button>
    </div>
  )
}
