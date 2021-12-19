import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

const theme = createTheme({
  palette: {
     primary: {
        light: '#619657',
        main: '#33682c',
        dark: '#003D01'
     },
     secondary: {
       main: '#fff',
     },
  },
});


ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme = { theme }>
      <App />
    </ThemeProvider>
  </Provider>, 
  document.getElementById('root')
);
