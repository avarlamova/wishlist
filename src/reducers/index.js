import updateWishlist from './wishlist';
import updateShoppingCart from './shopping-cart';

const reducer = (state, action) => {
  return {
    wishlist: updateWishlist(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};

export default reducer;
