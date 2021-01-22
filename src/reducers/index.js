const initialState = {
  wishes: [],
  loading: true,
  error: false,
  cartItems: [],
  orderTotal: 200
};

const updateCartItems = (cartItems, item, idx) => {

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

const updateCartItem = (wish, item = {}) => {

  const {
    id = wish.id,
    count = 0,
    title = wish.title,
    total = 0 } = item;

  return {
    id,
    title,
    count: count + 1,
    total: total + wish.price
  };
};

const updateOrder = (state, wishId, quantity) => {
  const { wishes, cartItems } = state;

  const wish = wishes.find(({id}) => id === wishId);
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
        wishes: action.payload,
        loading: false,
        error: false,
      };
    
    case 'FETCH_WISHLIST_REQUEST':
        return {
          ...state,
          wishes: [],
          loading: false,
          error: false,
        };

    case 'FETCH_WISHLIST_FAILURE':
          return {
            ...state,
            wishes: [],
            loading: false,
            error: action.payload,
          };
    
    case 'WISH_ADDED_TO_CART':
    return updateOrder(state, action.payload, 1);

    default:
      return state;
  }
};

export default reducer;
