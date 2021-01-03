import React from 'react';
import {WishlistServiceConsumer} from '../../contexts/wishlist-context.js';

const withWishlistService = () => (Wrapped) => {

    return (props) => {
        return (
            <WishlistServiceConsumer>
                {(wishlistService) => {
                   return <Wrapped {...props} wishlistService = {wishlistService} />
                }}
            </WishlistServiceConsumer>
        );
    }
};
export default withWishlistService;
