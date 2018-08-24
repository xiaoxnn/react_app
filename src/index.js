import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import   * as stores from "./components/store";
import { Provider } from "mobx-react";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((  <Provider store={stores}><BrowserRouter><App /></BrowserRouter></Provider>), document.getElementById('root'));
registerServiceWorker();
