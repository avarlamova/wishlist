const initialState = {
    wishes: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 220
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
            let newItem;
            if (item) {
                newItem = {
                    ...item,
                    count: item.count+1,
                    total: item.total+wish.price
                }
            } else {
                newItem = {
                id: wish.id,
                title: wish.title,
                count: 1,
                total: wish.price
            }
            
            if (itemIndex === -1) {
                return {
                    ...state, 
                    cartItems: [...state.cartItems, newItem]
                }
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems.slice(0,itemIndex),
                    newItem,
                    ...state.cartItems.slice(itemIndex+1)
                ]
                }
            }
        }
    default:
        return state;
    }
} 

export default reducer;

