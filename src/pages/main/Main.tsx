import clsx from 'clsx';
import React, {
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {useInputText} from '../../hooks/useInputText';
import styles from './Main.module.css';
import {ModalDialog} from '../../components/Modal';
import {useTimer} from '../../hooks/useTimer';
import {AccuracyAndWPM} from '../components/shared/AccuracyAndWPM';
import {useIsTabVisible} from '../../hooks/useIsTabVisible';

interface IMove {
  time: number;
  position: number;
}

export const Main: React.FC = () => {
  const startTime = useRef<number>(0);
  const isTabVisible = useIsTabVisible();
  const [isFocused, setIsFocused] = useState(true);
  const [inputText, setPressedKey] = useState<string>('');
  const [currentMoves, setCurrentMoves] = useState<IMove[]>([]);
  const [previousMoves, setPreviousMoves] = useState<IMove[]>([]);
  const [isReadyToStart, setIsReadyToStart] = useState<boolean>(true);
  const currentTimeout = useRef<NodeJS.Timeout | undefined>(undefined);
  const [previousCursorPosition, setPreviousCursorPosition] = useState<
    number | null
  >(null);

  const previousInputText: string | null = useDeferredValue<string>(inputText);
  const correctLettersCount = useRef<number>(0);

  const [openModal, setOpenModal] = useState<boolean>(false);
  const timer = useTimer();

  // const initialText = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`;
  const initialText = 'Hello World';
  const initialSplittedText: string[] = initialText.split('');

  const {clearData, listenKeyboardEvents, removeKeyboardEvents} =
    useInputText(setPressedKey);
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    (divRef.current as any).focus();
  }, []);

  useEffect(() => {
    if (!isReadyToStart) {
      showNextMove();
    }
  }, [isReadyToStart]);

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
    correctLettersCount.current = 0;
    startTime.current = 0;
    timer.reset();

    if (currentTimeout) {
      clearTimeout(currentTimeout?.current);
    }

    console.log('barlus dzez');
  };

  useEffect(() => {
    const isStarting: boolean = isReadyToStart && inputText.length > 0;
    const isFinished: boolean = inputText?.length === initialText?.length;
    const isNewLetterAdded: boolean =
      !!inputText.length && inputText.length > previousInputText.length;
    const isLetterRemoved: boolean =
      !!previousInputText.length && inputText.length < previousInputText.length;

    if (isStarting) {
      timer.start();
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

    if (isNewLetterAdded) {
      const isLastLetterCorrect: boolean =
        inputText.at(-1) === initialSplittedText.at(inputText.length - 1);

      if (isLastLetterCorrect) {
        correctLettersCount.current++;
      }
    } else if (isLetterRemoved) {
      const wasRemovedLetterCorrect: boolean =
        previousInputText.at(-1) ===
        initialSplittedText[previousInputText.length - 1];

      if (wasRemovedLetterCorrect) {
        correctLettersCount.current--;
      }
    }

    if (isFinished) {
      console.log(1111);
      setOpenModal(true);
      removeKeyboardEvents();
      timer.stop();
    }
  }, [inputText?.length]);

  const onBlur = () => {
    removeKeyboardEvents();
    setIsFocused(false);
  };

  const onFocus: React.FocusEventHandler<HTMLDivElement> = () => {
    listenKeyboardEvents();
    setIsFocused(true);
  };

  useEffect(() => {
    const isFinished: boolean = inputText?.length === initialText?.length;

    if (inputText.length) {
      if (isFocused && isTabVisible && !isFinished) {
        timer.start();
      } else {
        removeKeyboardEvents();
        timer.stop();
      }
    }
  }, [isFocused, inputText.length, isTabVisible]);

  useEffect(() => {
    const clickOutsideTextArea = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        onBlur();
      }
    };

    document.addEventListener('click', clickOutsideTextArea);

    return () => {
      document.removeEventListener('click', clickOutsideTextArea);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={clsx(styles.pauseText, {
          [styles.pauseTextInvisible]: isFocused,
        })}
      >
        Paused
        <div>
          <img src="./cursor.png" alt="cursor" />
          <h4>Click here to continue</h4>
        </div>
      </div>

      <div
        ref={divRef}
        tabIndex={0}
        // onBlur={onBlur}
        onFocus={onFocus}
        className={clsx(styles.textArea, {
          [styles.textArea_blured]: !isFocused,
        })}
      >
        <div>{timer.seconds}</div>
        <div>
          {initialSplittedText?.map((letter, index) => {
            const isCorrect: boolean = letter === inputText[index];
            const isIncorrect: boolean = !isCorrect && index < inputText.length;
            const isLastTyppedLetter: boolean = index === inputText.length;
            const isPreviousCursorPosition: boolean =
              index === previousCursorPosition;

            return (
              <React.Fragment key={`${letter}_${index}`}>
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
                  className={clsx(
                    styles.letter,
                    {[styles.letter_space]: letter === ' '},
                    {[styles.correct]: isCorrect},
                    {[styles.incorrect]: isIncorrect}
                  )}
                >
                  {letter}
                </span>
              </React.Fragment>
            );
          })}
        </div>
        <button
          onClick={onRestart}
          className={clsx(styles.restartBtn, {
            [styles.restartBtnActive]: !isFocused,
          })}
        >
          Restart
        </button>
      </div>

      <ModalDialog
        title={'You have finished typing'}
        description={
          <AccuracyAndWPM
            seconds={timer.seconds}
            totalCharsCount={initialText.length}
            correctLetters={correctLettersCount.current}
          />
        }
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};
