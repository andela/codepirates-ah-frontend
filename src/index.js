import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.css';


render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
