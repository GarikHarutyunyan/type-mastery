import React, {useState} from 'react';
import styles from './AuthModal.module.css';
import {AuthForm} from '../AuthForm/AuthForm';
import SignUp from '../SignUp/SignUp';
import {Modal} from '../Modal';

interface IModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export enum AuthMode {
  SIGN_IN = 'signIn',
  SIGN_UP = 'signUp',
}

const AuthModal = ({isVisible, onClose}: IModalProps) => {
  const [mode, setMode] = useState<AuthMode>(AuthMode.SIGN_IN);
  const title = mode === AuthMode.SIGN_IN ? 'Sign In' : 'Sign Up';
  const toggleMode = () => {
    const newMode =
      mode === AuthMode.SIGN_IN ? AuthMode.SIGN_UP : AuthMode.SIGN_IN;

    setMode(newMode);
  };
  const info = (
    <AuthForm onClose={onClose} mode={mode} toggleMode={toggleMode} />
  );

  return (
    <Modal
      title={title}
      info={info}
      isVisible={isVisible}
      onClose={onClose}
      className={styles.registrationModal}
    />
  );
};

export {AuthModal};
