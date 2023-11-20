import React, {useState} from 'react';
import styles from './SignInForm.module.css';

interface ISignInFormProps {
  onSignIn: (event: any) => void;
  onSignUp: () => void;
}

const SignInForm: React.FC<ISignInFormProps> = ({onSignIn, onSignUp}) => {
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

  const signIn = (event: any) => {
    event.preventDefault();
    // console.log(username, password);
    onSignIn({username, password});
  };

  return (
    <div className={styles.container}>
      <form onSubmit={signIn}>
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
          {'Sign In'}
        </button>
      </form>
      <div className={styles.signUpContainer}>
        <span className={styles.signUpText}>{`Don't have an account?`}</span>
        <a onClick={onSignUp}>{'Sign up here'}</a>
      </div>
    </div>
  );
};

export {SignInForm};
