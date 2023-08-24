import { useEffect, useState } from "react";

export const useTimer = () => {
    const [seconds, setSeconds] = useState<number>(0);
    const [isStarted, setIsStated] = useState<boolean>(false);

    const start = () => {
        setIsStated(true);
    };

    const stop = () => {
        setIsStated(false);
    }

    const restart = () => {
        setSeconds(0);
        setIsStated(true);
    };

    useEffect(() => {
        let timer: NodeJS.Timer;

        if (isStarted) {
            timer = setInterval(() => {
                setSeconds(prevState => prevState + 1);
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [isStarted]);

    return { seconds, restart, start, stop };
}