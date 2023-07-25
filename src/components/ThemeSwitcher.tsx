import { FC, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export const ThemeSwitcher: FC = (): JSX.Element => {
    const { toggleTheme, theme } = useContext(ThemeContext);

    return (
        <div style={{ backgroundColor: 'red', width: '32px' }} onClick={toggleTheme}>
            {theme === 'dark' ? <MdLightMode style={{ fontSize: '32px' }} /> : <MdDarkMode style={{ fontSize: '32px' }} />}
        </div>
    );
};