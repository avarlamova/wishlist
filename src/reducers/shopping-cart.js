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
  
    const wish = wishes.find((wish)=>wish.id === wishId);
    const itemIndex = cartItems.findIndex(({id}) => id === wishId)
    const item = cartItems[itemIndex];
    const newItem = updateCartItem(wish, item, quantity);
    return {
    ...state,cartItems: updateCartItems(cartItems, newItem, itemIndex)};
  };

const updateShoppingCart = (state, action) => {

  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0
    }
  }

  switch(action.type) {
    case 'WISH_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);

    case 'WISH_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1);

    case 'ALL_WISHES_REMOVED_FROM_CART':
      const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
