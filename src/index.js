import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app.js';
import {WishlistServiceProvider} from './contexts/wishlist-context';
import WishlistService from './services/wishlistservice';
import store from './store';

const wishlistService = new WishlistService();

ReactDOM.render(
    <Provider store={store}>
        <WishlistServiceProvider value={wishlistService}>
            <Router>
                <App />
            </Router>
        </WishlistServiceProvider>
    </Provider>,
document.getElementById('root'))