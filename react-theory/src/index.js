import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import serviceWorker from './serviceWorker';

const application = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

ReactDOM.render(application, document.getElementById('root'));

serviceWorker();
