import React, { Component } from 'react';
import WishlistItem from '../wishlist-item/wishlist-item';
import { connect } from 'react-redux';
import Spinner from '../loading-spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

import  withWishlistService  from '../hoc/with-wishlistservice';
import { fetchWishlist, wishAddedToCart } from '../../actions/index';
import compose  from '../../utilities/compose';

const Wishlist = ({ wishes, onAddedToCart }) => {
  return (
    <ul>
    {
      wishes.map((wish) => {
        return (
          <li key={wish.id}><WishlistItem wish={wish} onAddedToCart={() => onAddedToCart(wish.id)}/>
          </li>
        )
      })
    }
  </ul>
  );
};

class WishlistContainer extends Component {

  componentDidMount() {
    this.props.fetchWishlist();
  }

  render() {
    const { wishes, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return <Wishlist wishes={wishes} onAddedToCart={onAddedToCart}/>;

}   
}

const mapStateToProps = ({ wishes, loading, error }) => {
  return { wishes, loading, error };
};

const mapDispatchToProps = (dispatch, { wishlistService }) => {

  return {
    fetchWishlist: fetchWishlist(wishlistService, dispatch),
    onAddedToCart: (id) => dispatch(wishAddedToCart(id))
  }
};

export default compose(
  withWishlistService(),
  connect(mapStateToProps, mapDispatchToProps)
)(WishlistContainer);
