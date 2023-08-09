import React, {useState, ChangeEvent} from 'react';
import style from './SignIn.module.css';
import {AuthMode} from '../AuthModal/AuthModal';

interface IAuthFormProps {
  mode: AuthMode;
  onClose: () => void;
  toggleMode: () => void;
}

const AuthForm = ({mode, toggleMode, onClose}: IAuthFormProps) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const signIn = () => {
    setState({
      email: state.email,
      password: state.password,
    });
    console.log(state);
    onClose();
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      email: e.target.value,
    });
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      password: e.target.value,
    });
  };

  const actionTitle: string = mode === AuthMode.SIGN_IN ? 'SIGN IN' : 'SIGN UP';
  const question: string =
    mode === AuthMode.SIGN_IN
      ? 'Do not have an account?'
      : 'Alerady have an account?';
  const suggestion: string = mode === AuthMode.SIGN_IN ? 'Sign Up' : 'Sign In';

  return (
    <div className={style.registration}>
      <div className={style.inputEmail}>
        <div className={style.EMAIL}>USERNAME</div>
        <input
          type="email"
          placeholder="Email address"
          className={style.email}
          value={state.email}
          onChange={handleEmailChange}
        />
      </div>
      <div className={style.inputPassword}>
        <div className={style.PASSWORD}>PASSWORD</div>
        <input
          type="password"
          placeholder="Password"
          className={style.password}
          value={state.password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <nav>
          <span className={style.textCreateAccount}>{question}</span>
          <a onClick={toggleMode} className={style.CreateAccountLink}>
            {suggestion}
          </a>
        </nav>
      </div>
      <div className={style.buttonLogin}>
        <button className={style.buttonInput} onClick={signIn}>
          {actionTitle}
        </button>
      </div>
    </div>
  );
};

export {AuthForm};
