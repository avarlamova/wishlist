import React from 'react';
import { Route, Switch} from 'react-router-dom';
import HomePage from '../components/pages/homepage';
import WishlistPage from '../components/pages/wishlist-page';

const App = () => {
    return (
        <Switch>
            <Route path = "/" component={HomePage} exact/>
            <Route path = "/list" component={WishlistPage} />
        </Switch>
    )
}

export default App
