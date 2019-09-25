import React from 'react';
import { render } from 'react-dom';
import App from '../server/apprver/app';
import TestPage from './components/testpage';

const out = App.prototype ? <App /> : <TestPage />;

render(out, document.getElementById('root'));
