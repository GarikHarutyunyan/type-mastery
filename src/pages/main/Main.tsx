import clsx from 'clsx';
import React, {useEffect, useRef, useState} from 'react';
import {ThemeSwitcher} from '../../components/ThemeSwitcher';
import {useInputText} from '../../hooks/useInputText';
import styles from './Main.module.css';

interface IMove {
  time: number;
  position: number;
}

export const Main: React.FC = () => {
  const startTime = useRef<number>(0);
  const [inputText, setPressedKey] = useState<string>('');
  const [currentMoves, setCurrentMoves] = useState<IMove[]>([]);
  const [previousMoves, setPreviousMoves] = useState<IMove[]>([]);
  const [isReadyToStart, setIsReadyToStart] = useState<boolean>(true);
  const currentTimeout = useRef<NodeJS.Timeout | undefined>(undefined);
  const [previousCursorPosition, setPreviousCursorPosition] = useState<
    number | null
  >(null);

  const initialText = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`;
  const initialSplittedText: string[] = initialText.split('');

  const {clearData} = useInputText(setPressedKey);

  useEffect(() => {
    if (!isReadyToStart) {
      showNextMove();
    }
  }, [isReadyToStart]);

  useEffect(() => {
    if (isReadyToStart && inputText.length === 1) {
      startTime.current = Date.now();
      setCurrentMoves([{time: 0, position: 1}]);
      setIsReadyToStart(false);
    } else if (startTime.current) {
      const currentTime: number = Date.now();
      const time: number = currentTime - startTime.current;
      const position: number = inputText.length;
      const newMove: IMove = {time, position};

      startTime.current = currentTime;
      setCurrentMoves((state) => [...state, newMove]);
    }
  }, [inputText.length]);

  const showNextMove = (): void => {
    const currentMove: IMove = previousMoves[0];
    if (currentMove) {
      const {time, position} = currentMove;
      currentTimeout.current = setTimeout(() => {
        if (!isReadyToStart) {
          setPreviousCursorPosition(position);
          previousMoves.shift();
          showNextMove();
        }
      }, time);
    }
  };

  const onRestart = (): void => {
    setIsReadyToStart(true);
    setPressedKey('');
    clearData();
    setPreviousMoves(currentMoves);
    setPreviousCursorPosition(null);
    setCurrentMoves([]);
    startTime.current = 0;

    if (currentTimeout) {
      clearTimeout(currentTimeout.current);
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={onRestart} style={{height: '50px', width: '200px'}}>
        {'Restart'}
      </button>
      <div>
        {initialSplittedText.map((letter, index) => {
          const isCorrect: boolean = letter === inputText[index];
          const isIncorrect: boolean = !isCorrect && index < inputText.length;
          const isLastTyppedLetter: boolean = index === inputText.length;
          const isPreviousCursorPosition: boolean =
            index === previousCursorPosition;

          return (
            <>
              <ThemeSwitcher />
              {isPreviousCursorPosition && (
                <span
                  className={clsx(
                    styles.textCursor,
                    styles.previousTextCursor,
                    styles.blink
                  )}
                >
                  {'|'}
                </span>
              )}
              {isLastTyppedLetter && (
                <span className={clsx(styles.textCursor, styles.blink)}>
                  {'|'}
                </span>
              )}
              <span
                key={`${letter}_${index}`}
                className={clsx(
                  styles.letter,
                  {[styles.letter_space]: letter === ' '},
                  {[styles.correct]: isCorrect},
                  {[styles.incorrect]: isIncorrect}
                )}
              >
                {letter}
              </span>
            </>
          );
        })}
      </div>
    </div>
  );
};
