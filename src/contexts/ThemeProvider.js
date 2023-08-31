import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './ThemeContext';

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.dark);

    const changeTheme = (theme) => {
        setTheme(theme);
    }

    useEffect(() => {
        switch (theme) {
            case themes.dark:
                document.body.classList.add('dark-mode');
                break;
            case themes.light:
            default:
                document.body.classList.remove('dark-mode');
                break;
        }
    }, [theme])

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
        {props.children}
    </ThemeContext.Provider>
  )
};

export default ThemeProvider;
