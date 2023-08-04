import React, { useEffect, useState } from "react";
import "./DarkMode.css";
import { useDispatch, useSelector } from "react-redux";
import { appStylesOp } from "../../store/app/operations";
import { RootState } from "../../store/store";
import { ThunkDispatch } from "redux-thunk";

const DarkMode = () => {
    const dispatch: ThunkDispatch<RootState, any, any> = useDispatch();
    const storedTheme = localStorage.getItem("theme");
    const prefersDark =
        window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const defaultDark = storedTheme === "dark" || (storedTheme === null && prefersDark);

    const theme = useSelector((state: RootState) => state.appStyles.styles.theme);

    const [isDarkEnabled, setIsDarkEnabled] = useState(defaultDark);

    const setDark = () => {
        dispatch(appStylesOp.setStyles({ theme: 'dark' }));
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
        setIsDarkEnabled(true);
    };

    const setLight = () => {
        dispatch(appStylesOp.setStyles({ theme: 'light' }));
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
        setIsDarkEnabled(false);
    };

    // Toggle between dark and light themes based on the current theme
    const toggleTheme = () => {
        if (theme === "dark") {
            setLight();
        } else {
            setDark();
        }
    };

    // Update the state based on the subscribed value
    useEffect(() => {
        setIsDarkEnabled(theme === "dark");
    }, [theme]);

    return (
        <div className="toggle-theme-wrapper">
            <span role="img" aria-label="Light mode">☀️</span>
            <label className="toggle-theme" htmlFor="checkbox">
                <input
                    type="checkbox"
                    id="checkbox"
                    checked={isDarkEnabled}
                    onChange={toggleTheme}
                />
                <div className="slider round" />
            </label>
            <span role="img" aria-label="Dark mode">🌒</span>
        </div>
    );
};

export default DarkMode;
