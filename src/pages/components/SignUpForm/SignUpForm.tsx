import React from 'react';
import styles from './SignUpForm.module.css';

interface ISignUpFormProps {
  onSignIn: () => void;
  onSignUp: () => void;
}

const SignUpForm: React.FC<ISignUpFormProps> = ({onSignIn, onSignUp}) => {
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
          {'Sign Up'}
        </button>
      </form>
      <div className={styles.signUpContainer}>
        <span className={styles.signUpText}>{`Already have an account?`}</span>
        <a onClick={onSignUp}>{'Sign in here'}</a>
      </div>
    </div>
  );
};

export {SignUpForm};
