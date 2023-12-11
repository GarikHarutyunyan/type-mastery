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
  const grossWPM = totalCharsCount / 5; // 5 is the common length of word
  const WPM = Math.round(grossWPM / minutes);
  const accuracy = Math.round((correctLetters / totalCharsCount) * 100);

  return (
    <div>
      <div>WPM {WPM}</div>
      <div>Accuracy: {accuracy}%</div>
    </div>
  );
};
