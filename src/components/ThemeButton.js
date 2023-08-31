import React, { useContext } from 'react';
import { ThemeContext, themes } from '../contexts/ThemeContext';
import "@theme-toggles/react/css/Classic.css";
import { Classic } from '@theme-toggles/react';

const ThemeButton = () => {
    const { changeTheme, theme } = useContext(ThemeContext);

  return (
    <div
        className='theme-btn'
        onClick={() => {
            changeTheme(theme === themes.dark ? themes.light : themes.dark);
        }}
    >
        <Classic duration={750} toggled={theme === themes.dark} />
    </div>
  )
};

export default ThemeButton;
