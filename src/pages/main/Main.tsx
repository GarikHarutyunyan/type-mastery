import React, { useEffect, useState } from 'react';
import { useKeyboard } from '../../hooks/useKeyboard';

import styles from "../../styles/Main.module.css";

export const Main: React.FC = () => {
    const [pressedKey, setPressedKey] = useState<string>("");
    const [inputText, setInputText] = useState<string>("");

    const initialText = "hello world";
    const initialSplittedText: string[] = initialText.split('');
    console.log(initialSplittedText);

    useKeyboard(setPressedKey);

    useEffect(() => {
        const currentIndex: number = inputText.length;
        
        if (initialText[currentIndex] === pressedKey) {
            setInputText(prevState => prevState += pressedKey);
        }
    }, [pressedKey]);

    return (
        <div className={styles.container}>
            {initialSplittedText.map((letter)=>{
                return (<p className={styles.initialText}>{letter}</p>)
            })}
            <h1 className={styles.inputText}>{inputText}</h1>
        </div>
    )
}
