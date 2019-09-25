import React from 'react';
import { render } from 'react-dom';
<<<<<<< HEAD
import App from '../server/apprver/app';
=======
import App from './app';
>>>>>>> a2d1621455e657b96361083c050a66061d943b82
import TestPage from './components/testpage';

const out = App.prototype ? <App /> : <TestPage />;

render(out, document.getElementById('root'));
