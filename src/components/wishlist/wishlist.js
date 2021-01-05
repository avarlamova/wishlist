import React, { Component } from 'react'
import WishlistItem from '../wishlist-item/wishlist-item';
import { connect } from 'react-redux';
import { fetchWishlist } from '../../actions/index';
import withWishlistService from '../hoc/with-wishlistservice';
import compose  from '../../utilities/compose';
import Spinner from '../loading-spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

const Wishlist = ({wishes}) => {
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

class WishlistContainer extends Component {
    
    componentDidMount(){
        this.props.fetchWishlist();
    }
    
    render() {

        const {wishes, loading, error} = this.props;

        if (loading) {
            return <Spinner /> 
        }

        if (error) {
            return <ErrorIndicator />
        }
        return <Wishlist wishes={wishes} />
    }
}

const mapStateToProps = ({wishes, loading, error}) => {
    return { wishes, loading, error }
}

const mapDispatchToProps = (dispatch, {wishlistService}) => {
    return {
    fetchWishlist: fetchWishlist(wishlistService, dispatch)
    }
  };

  export default compose(
    withWishlistService(),
    connect(mapStateToProps, mapDispatchToProps)
  )(WishlistContainer);
  