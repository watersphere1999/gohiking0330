import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import './axios';

render(
<BrowserRouter basename={process.env.PUBLIC_URL}>
<App />
</BrowserRouter>
, document.getElementById('root'))
