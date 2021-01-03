const wishlistLoaded = (newWishlist) => {
    return {
        type: 'WISHLIST_LOADED',
        payLoad: newWishlist,
    }
}

const wishlistRequested = () => {
    return {
        type: 'WISHLIST_REQUESTED',
    }
}

const loadingError = (error) => {
    return {
        type: 'LOADING_ERROR',
        payLoad: error,
    }
}

export {wishlistLoaded, wishlistRequested, loadingError}