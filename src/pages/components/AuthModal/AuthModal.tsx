import {useState, useContext} from 'react';

import {SignInForm} from '../SignInForm/SignInForm';
import {SignUpForm} from '../SignUpForm/SignUpForm';
import {Modal} from '../../../components/Modal';
import {UserClient} from '../../../clients/UserClient';
import {IUserDTO} from '../../../data-structures/dto/IUserDTO';
import {AuthClient} from '../../../clients/AuthClient';
import {AuthenticationContext, IUser} from '../../../contexts';

interface IModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export enum AuthMode {
  SIGN_IN = 'signIn',
  SIGN_UP = 'signUp',
}

const AuthModal = ({isVisible, onClose}: IModalProps) => {
  const {setUser} = useContext(AuthenticationContext);
  const [mode, setMode] = useState<AuthMode>(AuthMode.SIGN_IN);
  const inSignInMode = mode === AuthMode.SIGN_IN;
  const title = inSignInMode ? 'Sign In' : 'Sign Up';

  const onSignIn = async (user: IUserDTO): Promise<void> => {
    try {
      const newUserDTO: IUserDTO = await UserClient.signUp(user);
      const newUser: IUser = {name: newUserDTO.username};

      setUser(newUser);
      onClose();
    } catch (error) {
      //TODO: remove alert and handle error
      alert(error);
    }
  };

  const onSignUp = async (user: IUserDTO): Promise<void> => {
    const newUserDTO: IUserDTO = await UserClient.signUp(user);
  };

  const info = inSignInMode ? (
    <SignInForm
      onSignIn={onSignIn}
      onSignUp={() => setMode(AuthMode.SIGN_UP)}
    />
  ) : (
    <SignUpForm
      onSignIn={() => setMode(AuthMode.SIGN_IN)}
      onSignUp={onSignUp}
    />
  );

  return (
    <Modal title={title} info={info} isVisible={isVisible} onClose={onClose} />
  );
};

export {AuthModal};
