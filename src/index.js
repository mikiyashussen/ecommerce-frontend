import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleWare  from 'redux-thunk';
import { updateCartReducer } from './reducers';

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(updateCartReducer, applyMiddleware(thunkMiddleWare));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
