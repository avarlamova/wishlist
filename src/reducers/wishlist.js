const updateWishlist = (state, action) => {

  if (state === undefined) {
    return {
      wishes: [],
      loading: true,
      error: null
    };
  }

  switch (action.type) {
    case 'FETCH_WISHLIST_REQUEST':
      return {
        wishes: [],
        loading: true,
        error: null
      };

    case 'FETCH_WISHLIST_SUCCESS':
      return {
        wishes: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_WISHLIST_FAILURE':
      return {
        wishes: [],
        loading: false,
        error: action.payload
      };

    default:
      return state.wishlist;
  }
};

export default updateWishlist;
