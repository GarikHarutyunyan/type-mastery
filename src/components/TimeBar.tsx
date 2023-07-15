import React from 'react'
import { useTimer } from '../hooks/useTimer'

export const TimeBar = () => {
    const {seconds} = useTimer();

  return (
    <h1>{seconds}</h1>
  )
}
