import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './HelloWorldApp';
import { FirstApp, FirstAppFragment } from './FirstApp';
import { CounterApp } from './CounterApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstAppFragment title="Hola soy Matias" subtitle={2} /> */}
         <CounterApp value={20} ></CounterApp>
    </React.StrictMode>
);