import {createPortal} from 'react-dom';
import styles from './RegistrationModal.module.css';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

interface IModalProps {
    isVisible: boolean;
    onClose: () => void;
}

const RegistrationModal = ({isVisible, onClose}: IModalProps) => {
    const element: HTMLElement = document.getElementById('modal-root') as HTMLElement;

    const modalContent = (
        <div className={styles.registrationModal}>
            {window.location.pathname === '/signIn' ? <SignIn onClose={onClose}/> : <SignUp onClose={onClose}/>}
        </div>
    );

    return isVisible ? createPortal(modalContent, element) : null;
};

export {RegistrationModal};
