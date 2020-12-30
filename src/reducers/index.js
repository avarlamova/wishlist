const initialState = {
    wishes: [
        {
            name: '1',
            picture: '1',
        },
        {
            name: '2',
            picture: '2',
        }
    ]
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

