import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../components/shop-header/shop-header';
import HomePage from './pages/homepage' 
import CartPage  from './pages/cart-page';

const App = () => {
  return (
    <>
      <ShopHeader numItems={3} total={1}/>
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact />

        <Route
          path="/cart"
          component={CartPage}
          />
      </Switch>
    </>
  );
};

export default App;

