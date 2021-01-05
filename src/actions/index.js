

const wishlistLoaded = (newWishlist) => {
    return {
        type: 'FETCH_WISHLIST_SUCCESS',
        payLoad: newWishlist,
    }
}

const wishlistRequested = () => {
    return {
        type: 'FETCH_WISHLIST_REQUEST',
    }
}

const loadingError = (error) => {
    return {
        type: 'FETCH_WISHLIST_FAILURE',
        payLoad: error,
    }
}

const fetchWishlist = (wishlistService, dispatch) => () => {
    dispatch(wishlistRequested());
    wishlistService.getWishlist()
      .then((data) => dispatch(wishlistLoaded(data)))
      .catch((error) => dispatch(loadingError(error)));
  };

export {fetchWishlist}