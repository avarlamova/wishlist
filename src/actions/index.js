
const wishlistLoaded = (newWishlist) => {
    return {
      type: 'FETCH_WISHLIST_SUCCESS',
      payload: newWishlist
    };
  };

  const wishlistRequested = () => {
    return {
      type: 'FETCH_WISHLIST_REQUEST',
    };
  };
  
const loadingError = (error) => {
  return {
    type: 'FETCH_WISHLIST_FAILURE',
    payload: error
  };
};

export const wishAddedToCart = (wishId) => {
  return {
    type: 'WISH_ADDED_TO_CART',
    payload: wishId
  };
};

export const wishRemovedFromCart = (wishId) => {
  return {
    type: 'WISH_REMOVED_FROM_CART',
    payLoad: wishId
  }
}

export const allRemovedFromCart = (wishId) => {
  return {
    type: 'ALL_REMOVED_FROM_CART',
    payLoad: wishId
  }
}

const fetchWishlist = (wishlistService, dispatch) => () => {
  dispatch(wishlistRequested());
  wishlistService.getWishlist()
    .then((data) => dispatch(wishlistLoaded(data)))
    .catch((err) => dispatch(loadingError(err)));
};

  export {
    fetchWishlist
  };

