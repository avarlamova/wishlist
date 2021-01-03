import React, { Component } from 'react'
import WishlistItem from '../wishlist-item/wishlist-item';
import { connect } from 'react-redux';
import { wishlistLoaded, wishlistRequested, loadingError } from '../../actions/index';
import withWishlistService from '../hoc/with-wishlistservice';
import compose  from '../../utilities/compose';
import Spinner from '../loading-spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';


class Wishlist extends Component {
    
    componentDidMount(){
        const {wishlistService, wishlistLoaded, wishlistRequested, loadingError} = this.props;

        wishlistRequested();
        wishlistService.getWishlist().then((data)=> {
            wishlistLoaded(data)
        })
        .catch((error)=> loadingError(error));
    }
    
    render() {

        const {wishes, loading, error} = this.props;

        if (loading) {
            return <Spinner /> 
        }

        if (error) {
            return <ErrorIndicator />
        }

        return (
            <ul>
                {wishes.map((wish)=> {
                return (
                    <li key={wish.name}><WishlistItem wish = {wish}/></li>
                )    
                })}
            </ul>
        )
    }
}

const mapStateToProps = ({wishes, loading, error}) => {
    return { wishes, loading, error }
}

const mapDispatchToProps = {
    wishlistLoaded,
    wishlistRequested,
    loadingError,
  };

  export default compose(
    withWishlistService(),
    connect(mapStateToProps, mapDispatchToProps)
  )(Wishlist);
  