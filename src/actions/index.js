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

export const wishAddedToCart = (wishId) => {
    return {
        type: 'WISH_ADDED_TO_CART',
        payLoad: wishId
    }
}

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
      .then((data) =>dispatch(wishlistLoaded(data)))
      .catch((error) => dispatch(loadingError(error)));
  };

export {fetchWishlist}