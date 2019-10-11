import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import { fa} from '@fortawesome/free-solid-svg-icons';
import App from './components/app';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

library.add(fab);


render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
