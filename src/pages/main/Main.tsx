import React, { useState } from 'react';

import clsx from 'clsx';
import { useInputText } from '../../hooks/useInputText';
import styles from "../../styles/Main.module.css";
import { ThemeSwitcher } from '../../components/ThemeSwitcher';

export const Main: React.FC = () => {
    const [inputText, setPressedKey] = useState<string>("");

    const initialText = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`;
    const initialSplittedText: string[] = initialText.split('');

    useInputText(setPressedKey);

    return (
        <div className={styles.container}>
            <ThemeSwitcher />
            <div>
                {
                    initialSplittedText.map((letter, index)=>
                        {
                            const isCorrect: boolean = letter === inputText[index]; 
                            const isIncorrect: boolean = !isCorrect && index < inputText.length;
                            
                            return (
                                <span key={`${letter}_${index}`} className={clsx(styles.letter, {[styles.letter_space]: letter === ' '}, {[styles.correct]: isCorrect}, {[styles.incorrect]: isIncorrect})}>
                                    {letter}
                                </span>
                            )   
                        }
                    )
                }
            </div>
        </div>
    )
}
