import {useState} from 'react';

import {Modal} from '../../../components/Modal';
import {SignInForm} from '../SignInForm/SignInForm';
import {SignUpForm} from '../SignUpForm/SignUpForm';

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
  const inSignInMode = mode === AuthMode.SIGN_IN;
  const title = inSignInMode ? 'Sign In' : 'Sign Up';

  const info = inSignInMode ? (
    <SignInForm
      onSignIn={() => alert(AuthMode.SIGN_IN)}
      onSignUp={() => setMode(AuthMode.SIGN_UP)}
    />
  ) : (
    <SignUpForm
      onSignIn={() => alert(AuthMode.SIGN_UP)}
      onSignUp={() => setMode(AuthMode.SIGN_IN)}
    />
  );

  return (
    <Modal title={title} info={info} isVisible={isVisible} onClose={onClose} />
  );
};

export {AuthModal};
