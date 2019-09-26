import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import TestPage from './components/testpage';
import store from './redux/store';

const out = App.prototype ? <App /> : <TestPage />;

render(<Provider store={store}>{out}</Provider>, document.getElementById('root'));
