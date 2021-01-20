/*import updateWishlist from './wishlist';
import updateShoppingCart from './shopping-cart';

const reducer = (state, action) => {
  return {
    wishList: updateWishlist(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};

export default reducer;
*/

const initialState = {
  wishes: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 0
};

const updateCartItems = (cartItems, item, idx) => {

  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ];
  }

  if (idx === -1) {
    return [
      ...cartItems,
      item
    ];
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ];
};

const updateCartItem = (wish, item = {}, quantity) => {

  const {
    id = wish.id,
    count = 0,
    title = wish.title,
    total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity*wish.price
  };
};

const updateOrder = (state, wishId, quantity) => {
  const { wishes, cartItems } = state;

  const wish = wishes.find((wish) => wish.id === wishId);
  const itemIndex = cartItems.findIndex(({id}) => id === wishId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(wish, item, quantity);
  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
  };
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
      case 'FETCH_WISHLIST_SUCCESS': 
          return {
              ...state,
              wishes: action.payLoad,
              loading: false,
              error: null,         
          };

      case 'FETCH_WISHLIST_REQUEST':
          return {
              ...state,
              wishes: [],
              loading: true,
              error: null,
          };

      case 'LOADING_ERROR':
          return {
              ...state,
              wishes: [],
              loading: false,
              error: action.payLoad,
          }

      case 'WISH_ADDED_TO_CART': 
      const wishId = action.payload;
      const wish = state.wishes.find((wish) => wish.id === wishId);
      const newItem = {
        id: wish.id,
        title: wish.title,
        count: 1,
        total: wish.price
      };

      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          newItem
        ]
      };

      //return updateOrder(state, action.payload, 1);

      case 'WISH_REMOVED_FROM_CART': 
      return updateOrder(state, action.payload, -1);

      case 'ALL_REMOVED_FROM_CART':
      const item = state.cartItems.find(({id}) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);

  default:
      return state;
  }
} 
export default reducer;
*/