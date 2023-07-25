import { ReactNode, useState } from "react";
import { ThemeContext } from "./ThemeContext";

type Props = {
    children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState<'light' | 'dark'>(
        (localStorage.getItem('theme') as 'light' | 'dark') || 'dark'
    );

    const toggleTheme = (): void => {
        const val = theme === 'light' ? 'dark' : 'light';
        setTheme(val);
        localStorage.setItem('theme', val);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};