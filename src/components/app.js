import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import HomePage from '../components/pages/homepage';
import WishlistPage from '../components/pages/wishlist-page';
import ShopHeader from '../components/shop-header/shop-header';

const App = () => {
    return (
        <>
        <ShopHeader numItems={2} total={200}/>
        <Switch>
            <Route path = "/" component={HomePage} exact/>
            <Route path = "/list" component={WishlistPage} />
        </Switch>
        </>
    )
}

export default App
