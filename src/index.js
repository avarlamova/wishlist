import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app.js';
import WishlistService, {WishlistServiceProvider} from './services/wishlistservice.js';
import store from './store.js';


ReactDOM.render(
    <Provider store={store}>
        <WishlistServiceProvider value={'dd'}>
            <Router>
                <App />
            </Router>
        </WishlistServiceProvider>
    </Provider>,
document.getElementById('root'))