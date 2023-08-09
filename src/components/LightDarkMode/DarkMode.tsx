import React, { useEffect } from 'react';
import styles from './DarkMode.module.css';
import { useDarkMode } from './DarkModeContext';

const DarkMode = () => {
    const { isDarkEnabled, toggleDarkMode } = useDarkMode();

    useEffect(() => {
        if (isDarkEnabled) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }, [isDarkEnabled]);

    return (
        <div className={styles.toggleThemeWrapper}>
            <span role="img" aria-label="Light mode">☀️</span>
            <label className={styles.toggleTheme} htmlFor="checkbox" >
                <input
                    type="checkbox"
                    id="checkbox"
                    checked={isDarkEnabled}
                    onChange={toggleDarkMode}
                />
                <div className={styles.slider + ' ' + styles.sliderRound} />
            </label>
            <span role="img" aria-label="Dark mode">🌒</span>
        </div>
    );
};

export default DarkMode;