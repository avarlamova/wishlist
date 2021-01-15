import updateBookList from './wishlist';
import updateShoppingCart from './shopping-cart';

const reducer = (state, action) => {
  return {
    wishlist: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};

export default reducer;


