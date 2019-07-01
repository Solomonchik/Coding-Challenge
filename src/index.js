import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './stylesheet/style.scss';


const application = (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);


render(application, document.getElementById('root'));
serviceWorker.unregister();
