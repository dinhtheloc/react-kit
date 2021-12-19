import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
// REDUX
import { Provider } from 'react-redux';
// import store from './redux/store';
import store from './stage/index';
import ThemeContextWrapper from './ThemeContextWrapper';

ReactDOM.render(
  <Provider store={store}>
    <ThemeContextWrapper>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </ThemeContextWrapper>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
