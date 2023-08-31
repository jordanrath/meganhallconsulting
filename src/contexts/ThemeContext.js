import { createContext } from 'react';

const themes = {
    dark: 'dark-mode',
    light: ''
};

const ThemeContext = createContext({
    theme: themes.dark,
    changeTheme: () => {},
});

export { ThemeContext, themes };
