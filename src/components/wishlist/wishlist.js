import React, { Component } from 'react';
import WishlistItem from '../wishlist-item/wishlist-item';
import {bindActionCreators} from 'redux';

import { connect } from 'react-redux';

import withWishlistService from '../hoc/with-wishlistservice';
import { fetchWishlist, wishAddedToCart } from '../../actions';
import compose from '../../utilities/compose';

import LoadingSpinner from '../loading-spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

const Wishlist = ({ wishes, onAddedToCart }) => {
  return (
    <>
    <div className="container"> 
    <div className="row justify-content-center">
      {
        wishes.map((wish) => {
          return (
            <div className="col-4" key={wish.id}>
              <WishlistItem
                wish={wish}
                onAddedToCart={() => onAddedToCart(wish.id)}/>
            </div>
          );
        })
      }
    </div>
    </div>
    </>
  );
};

class WishlistContainer extends Component {

  componentDidMount() {
    this.props.fetchWishlist();
  }

  render() {
    const { wishes, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <LoadingSpinner />;
    }

    if (error) {
      return <ErrorIndicator />
    }

    return <Wishlist wishes={wishes} onAddedToCart={onAddedToCart}/>;
  }
}

const mapStateToProps = ({ wishlist: { wishes, loading, error }}) => {
  return { wishes, loading, error };
};

const mapDispatchToProps = (dispatch, { wishlistService }) => {

  return bindActionCreators({
    fetchWishlist: fetchWishlist(wishlistService),
    onAddedToCart: wishAddedToCart
  }, dispatch)
};

export default compose(
  withWishlistService(),
  connect(mapStateToProps, mapDispatchToProps)
)(WishlistContainer);
