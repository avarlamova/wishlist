const wishlistLoaded = (newWishlist) => {
    return {
        type: 'WISHLIST_LOADED',
        payLoad: newWishlist,
    }
}

export {
    wishlistLoaded
}