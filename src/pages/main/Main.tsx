import { FC, useState } from 'react';
import { useKeyboard } from '../../hooks/useKeyboard';

import "../../styles/Main.module.css";

export const Main: FC = () => {
    const [pressedKey, setPressedKey] = useState<string>("");
    const [plainText] = useState<string>("aaa");
    // const [inputString, setInputString] = useState<string>("");

    useKeyboard(setPressedKey);

    return (
        <main>
            <h1>{plainText}</h1>
            <h1>
                {plainText.split('').map((char, index) => (
                    <span
                        key={index}
                        style={{ color: plainText.charAt(index) === pressedKey ? 'green' : 'black' }}
                    >
                        {char}
                    </span>
                ))}
            </h1>
        </main>
    )
}
