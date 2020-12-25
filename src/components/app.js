import React from 'react';
import withWishlistService from './hoc/with-wishlistservice';

const App = ({wishlistService}) => {
    return (
        <div>
{            'app'
}        </div>
    )
}

export default withWishlistService()(App)
