  import {createPortal} from 'react-dom';
import styles from './Modal.module.css';
import {ReactElement} from 'react';
import clsx from 'clsx';

interface IModalProps {
  title: string;
  info: string | ReactElement;
  isVisible: boolean;
  onClose: () => void;
  className?: string;
}

const Modal = ({title, info, isVisible, onClose, className}: IModalProps) => {
  const children = (
    <div className={clsx(styles.modal, className)}>
      <div className={styles.modal__header}>
        <h2>{title}</h2>
        <button onClick={onClose} className={styles.modal__closeButton}>
          {'X'}
        </button>
      </div>
      <div className={styles.modal__content}>{info}</div>
    </div>
  );
  const element: HTMLElement = document.getElementById(
    'modal-root'
  ) as HTMLElement;

  return isVisible ? createPortal(children, element) : null;
};

export {Modal};
