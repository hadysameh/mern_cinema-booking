import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store'
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
require('dotenv').config()

    axios.defaults.baseURL = 'http://localhost:5000';
    // axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
    // axios.defaults.headers.post['Content-Type'] = 'application/json';
    
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    
    axios.interceptors.request.use(function (config) {
      const token = store.getState().user.token;
      // console.log({token,user:store.getState().user.user})
      config.headers.Authorization =  `Bearer ${token}`;
  
      return config;
  });
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Provider store={store}>
    
      <App />

    
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
