import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';
import Main from './Main';
import ThemeProvider from './contexts/ThemeProvider';
import ScrollToTop from './components/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <React.StrictMode>
      <BrowserRouter basename={process.env.ROUTER_BASENAME}>
        <ScrollToTop />
        <Main />
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
);
