const initialState = {
    wishes: []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'WISHLIST_LOADED': 
            return {
                wishes: action.payLoad
            }
    default:
        return state;
    }
} 

export default reducer;

