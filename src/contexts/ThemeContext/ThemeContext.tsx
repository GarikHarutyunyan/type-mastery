import React, {ReactNode, createContext, useState} from 'react';
import {Theme} from '../../data-structures';

type ContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ContextType>({
  theme: Theme.DARK,
  toggleTheme: () => {},
});

interface IThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<IThemeProviderProps> = ({children}) => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem('theme') as Theme) || Theme.DARK
  );

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeContext, ThemeProvider};
