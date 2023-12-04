import React from 'react';
import styles from './SignInForm.module.css';

interface ISignInFormProps {
  onSignIn: () => void;
  onSignUp: () => void;
}

const SignInForm: React.FC<ISignInFormProps> = ({onSignIn, onSignUp}) => {
  return (
    <div className={styles.container}>
      <form onSubmit={onSignIn}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="username">
            {'Username'}
          </label>
          <input
            className={styles.input}
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="password">
            {'Password'}
          </label>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          {'Sign In'}
        </button>
      </form>
      <div className={styles.signUpContainer}>
        <span className={styles.signUpText}>{`Don't have an account?`}</span>
        <p>
          <a onClick={onSignUp}>{'Sign up here'}</a>
        </p>
      </div>
    </div>
  );
};

export {SignInForm};
