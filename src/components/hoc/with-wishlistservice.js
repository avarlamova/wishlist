import React from 'react';
import {WishlistServiceConsumer} from '../../contexts/wishlist-context.js';
import Wishlistservice from '../../services/wishlistservice.js';

const withWishlistService = () => (Wrapped) => {
    return (props) => {
        return (
            <WishlistServiceConsumer>
                {(Wishlistservice) => {
                   return <Wrapped {...props} Wishlistservice />
                }}
            </WishlistServiceConsumer>
        );
    }
};
export default withWishlistService;
