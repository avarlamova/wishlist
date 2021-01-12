const initialState = {
    wishes: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 220
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

  const deleteCartItem = (wish, item = {}) => {
  
    const {
      id = wish.id,
      count = 0,
      title = wish.title,
      total = 0 } = item;
  
    return {
      id,
      title,
      count: 0,
      total: total + wish.price
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

        case 'FETCH_WISHLIST_FAILURE':
            return {
                ...state,
                wishes: [],
                loading: false,
                error: action.payLoad,
                cartItems: [
                    {id: 4, name: 'Book4', count: 5, total: 150 }
                ]
            }

        case 'WISH_ADDED_TO_CART': 
            const wishId = action.payLoad;
            const wish = state.wishes.find((wish)=>wish.id === wishId);
            
            const itemIndex=state.cartItems.findIndex(({id}) => id === wishId)
            const item = state.cartItems[itemIndex];
            const newItem = updateCartItem(wish, item);
            return {
              ...state,
              cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
            };

        case 'WISH_REMOVED_FROM_CART': 
       
        return {
          ...state,
          cartItems: updateCartItems(state.cartItems, itemIndex)
        };
            

        case 'ALL_REMOVED_FROM_CART':
            let newRemoved = deleteCartItem(wish,item);
            return {
                ...state,
                cartItems: updateCartItems(state.cartItems, newRemoved, itemIndex)
              };
         
    default:
        return state;
    }
} 

export default reducer;

