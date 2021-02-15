import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header>
      <Link to="/">
        <div>Back </div>
      </Link>
      <Link to="/cart">
          {numItems} items (${total})
      </Link>
    </header>
  );
};


const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}) => {
  return {
    numItems: cartItems.length,
    total: orderTotal
  };
};

export default connect(mapStateToProps)(ShopHeader);
