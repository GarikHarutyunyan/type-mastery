import React, {useContext, useEffect} from 'react';
import styles from './ThemeSwitch.module.css';
import {ThemeContext} from '../../../contexts/ThemeContext';
import {Theme} from '../../../data-structures';
import clsx from 'clsx';

const ThemeSwitch = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const isDark = theme === Theme.DARK;

  return (
    <div className={styles.toggleThemeWrapper}>
      <span role="img" aria-label="Light mode">
        ☀️
      </span>
      <label className={styles.toggleTheme} htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          checked={isDark}
          onChange={toggleTheme}
        />
        <div className={clsx(styles.slider, styles.sliderRound)} />
      </label>
      <span role="img" aria-label="Dark mode">
        🌒
      </span>
    </div>
  );
};

export {ThemeSwitch};
