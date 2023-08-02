import { FC, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MdDarkMode, MdLightMode } from 'react-icons/md';

import styles from "../styles/ThemeSwitcher.module.css";

export const ThemeSwitcher: FC = (): JSX.Element => {
    const { toggleTheme, theme } = useContext(ThemeContext);

    return (
        <div onClick={toggleTheme} className={styles.container}>
            {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
        </div>
    );
};