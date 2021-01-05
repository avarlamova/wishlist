const initialState = {
    wishes: [],
    loading: true,
    error: null,
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_WISHLIST_SUCCESS': 
            return {
                wishes: action.payLoad,
                loading: false,
                error: null,
            };
        case 'FETCH_WISHLIST_REQUEST':
            return {
                wishes: [],
                loading: true,
                error: null,
            };

        case 'FETCH_WISHLIST_FAILURE':
            return {
                wishes: [],
                loading: false,
                error: action.payLoad,
            }
    default:
        return state;
    }
} 

export default reducer;

