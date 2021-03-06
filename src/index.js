import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import WishlistService from './services/wishlistservice';
import { WishlistServiceProvider } from './contexts/wishlist-context';

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
  document.getElementById('root')
);