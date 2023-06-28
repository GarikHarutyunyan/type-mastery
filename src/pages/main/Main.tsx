import { FC, useEffect, useState } from 'react';
import { useKeyboard } from '../../hooks/useKeyboard';
import text from "../../config/text.json";
import styles from "../../styles/Main.module.css";

export const Main: FC = () => {
    const [pressedKey, setPressedKey] = useState<string>("");
    const [inputString, setInputString] = useState<string>("");
    const [i, setI] = useState<number>(0);

    const plainText = text.en;

    useKeyboard(setPressedKey);

    useEffect(() => {
        if (plainText[i] === pressedKey) {
            setInputString(prevState => prevState += pressedKey);
            setI(prevState => ++prevState);
            console.log(plainText[i], pressedKey);
        } else {
            console.log('false');
        }

    }, [i, pressedKey]);

    return (
        <div className={styles.container}>
            <h1 className={styles.plainText}>{plainText}</h1>
            <h1 className={styles.inputString}>{inputString}</h1>
        </div>
    )
}
