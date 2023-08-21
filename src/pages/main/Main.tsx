import clsx from 'clsx';
import { FC, MouseEvent, useEffect, useRef, useState } from 'react';

import { Modal } from '../../components/modal/Modal';
import { useInputText } from '../../hooks/useInputText';
import styles from './Main.module.css';

interface IMove {
  time: number;
  position: number;
}

export const Main: FC = () => {
  const startTime = useRef<number>(0);
  const [inputText, setPressedKey] = useState<string>('');
  const [currentMoves, setCurrentMoves] = useState<IMove[]>([]);
  const [previousMoves, setPreviousMoves] = useState<IMove[]>([]);
  const [isReadyToStart, setIsReadyToStart] = useState<boolean>(true);
  const currentTimeout = useRef<NodeJS.Timeout | undefined>(undefined);
  const [previousCursorPosition, setPreviousCursorPosition] = useState<
    number | null
  >(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const initialText = `Contrary to popular belief`;
  const initialSplittedText: string[] = initialText.split('');

  const { clearData } = useInputText(setPressedKey);

  useEffect(() => {
    if (!isReadyToStart) {
      showNextMove();
    }
  }, [isReadyToStart]);

  useEffect(() => {
    if (isReadyToStart && inputText.length === 1) {
      startTime.current = Date.now();
      setCurrentMoves([{ time: 0, position: 1 }]);
      setIsReadyToStart(false);
    } else if (startTime.current) {
      const currentTime: number = Date.now();
      const time: number = currentTime - startTime.current;
      const position: number = inputText.length;
      const newMove: IMove = { time, position };

      startTime.current = currentTime;
      setCurrentMoves((state) => [...state, newMove]);
    }
  }, [inputText.length]);

  const showNextMove = (): void => {
    const currentMove: IMove = previousMoves[0];
    if (currentMove) {
      const { time, position } = currentMove;
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

  const handleCloseModal = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setShowModal(false);
  };

  useEffect(() => {
    if (inputText.length === initialText.length) {
      setShowModal(true);
    }
  }, [inputText.length]);

  return (
    <div className={styles.container}>
      {showModal && <Modal isVisible={showModal} title='Your results' info='erwe' onClose={handleCloseModal} />}

      <button onClick={onRestart} style={{ height: '50px', width: '200px' }}>
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
                  { [styles.letter_space]: letter === ' ' },
                  { [styles.correct]: isCorrect },
                  { [styles.incorrect]: isIncorrect }
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
