import { useEffect, useState } from "react";

export const useTimer = () => {
    const [seconds, setSeconds] = useState<number>(0);

    useEffect(() => {
        const timer: NodeJS.Timer = setInterval(() => {
            setSeconds((prevState: number) => prevState + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [seconds]);

    return [seconds];
}