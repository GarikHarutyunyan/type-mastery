import React from 'react';

export interface IAccuracyAndWPMProps {
    seconds: number;
    totalCharsCount: number;
}

export const AccuracyAndWPM: React.FC<IAccuracyAndWPMProps> = ({ seconds, totalCharsCount }) => {
    const minutes = seconds / 60;
    const grossWPM = (totalCharsCount / 5);
    const WPM = Math.round(grossWPM / minutes);

    console.log(minutes);
    return (
        <div>WPM {WPM}</div>
    )
}
