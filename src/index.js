import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';
import Main from './Main';
import ThemeProvider from './contexts/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <React.StrictMode>
      <BrowserRouter basename='/home'>
        <Main />
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
);
