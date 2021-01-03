const initialState = {
    wishes: [],
    loading: true,
    error: null,
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'WISHLIST_LOADED': 
            return {
                wishes: action.payLoad,
                loading: false,
                error: null,
            };
        case 'WISHLIST_REQUESTED':
            return {
                wishes: [],
                loading: true,
                error: null,
            };

        case 'LOADING_ERROR':
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

