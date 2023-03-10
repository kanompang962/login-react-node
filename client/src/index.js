import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Redux
import { Provider } from 'react-redux';
import {createStore} from 'redux-devtools-extension';
import {composeWithDevTools} from 'react-router-dom';
import rootReducer from './components/reducers/index';
// Route
import {BrowserRouter} from "react-router-dom";
// Antd
// import 'antd/dist/antd.css';

const store = createStore(rootReducer, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>,
  // </React.StrictMode>
);

