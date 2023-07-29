import {createPortal} from 'react-dom';
import styles from './Modal.module.css';

interface IModalProps {
  title: string;
  info: string;
  isVisible: boolean;
  onClose: () => void;
}

const Modal = ({title, info, isVisible, onClose}: IModalProps) => {
  const children = (
    <div className={styles.modal}>
      <div className={styles.modal__header}>
        <h2>{title}</h2>
        <button onClick={onClose} className={styles.modal__closeButton}>
          {'X'}
        </button>
      </div>
      <div className={styles.modal__content}>
        <p>{info}</p>
      </div>
    </div>
  );
  const element: HTMLElement = document.getElementById(
    'modal-root'
  ) as HTMLElement;

  return isVisible ? createPortal(children, element) : null;
};

export {Modal};
