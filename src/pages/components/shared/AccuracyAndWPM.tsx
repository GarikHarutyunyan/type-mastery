import React from 'react';

export interface IAccuracyAndWPMProps {
  seconds: number;
  totalCharsCount: number;
  correctLetters: number;
}

export const AccuracyAndWPM: React.FC<IAccuracyAndWPMProps> = ({
  seconds,
  totalCharsCount,
  correctLetters,
}) => {
  const minutes = seconds / 60;
  const grossWPM = totalCharsCount / 5;
  const WPM = Math.round(grossWPM / minutes);
  const accuracy = Math.round((correctLetters / totalCharsCount) * 100);

  return (
    <>
      <p>{`WPM ${WPM}`}</p>
      <p>{`Accuracy: ${accuracy}%`}</p>
    </>
  );
};
