<<<<<<< HEAD
import '../styles/Modal.module.css'; 

const Modal = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
=======
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
>>>>>>> master
