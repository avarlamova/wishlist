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
            const wish = state.wishes.find((wish)=>wish.id===wishId);
            const newItem = {
                id: wish.id,
                name: wish.title,
                count: 1,
                total: wish.price
            };
            return {
                ...state, 
                cartItems: [...state.cartItems, newItem]
            }

    default:
        return state;
    }
} 

export default reducer;

