import './index.css';
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from '@material-tailwind/react';
// import { Provider } from 'react-redux';

import App from './App';
// import {store } from './redux/store/store'; // Import your Redux store

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <Provider store={store}>  */}
    {/* <Provider>  */}
      <BrowserRouter>
        {/* <ThemeProvider> */}
          <App />
        {/* </ThemeProvider> */}
      </BrowserRouter>
    {/* </Provider> */}
  </StrictMode>
);
