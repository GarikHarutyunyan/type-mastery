import React, {useState} from 'react';
import styles from './SignUpForm.module.css';
import {IUserDTO} from '../../../data-structures/dto/IUserDTO';

interface ISignUpFormProps {
  onSignIn: () => void;
  onSignUp: ({username, password}: IUserDTO) => void;
}

const SignUpForm: React.FC<ISignUpFormProps> = ({onSignIn, onSignUp}) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onUsernameChange = (event: any) => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  const onPasswordChange = (event: any) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const signUp = (event: any) => {
    event.preventDefault();

    onSignUp({username, password});
  };

  return (
    <div className={styles.container}>
      <form onSubmit={signUp}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="username">
            {'Username'}
          </label>
          <input
            value={username}
            className={styles.input}
            type={'text'}
            name={'username'}
            placeholder={'Enter your username'}
            onChange={onUsernameChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="password">
            {'Password'}
          </label>
          <input
            value={password}
            className={styles.input}
            type={'password'}
            name={'password'}
            placeholder={'Enter your password'}
            onChange={onPasswordChange}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          {'Sign Up'}
        </button>
      </form>
      <div className={styles.signUpContainer}>
        <span className={styles.signUpText}>{`Already have an account?`}</span>
        <a onClick={onSignIn}>{'Sign in here'}</a>
      </div>
    </div>
  );
};

export {SignUpForm};
