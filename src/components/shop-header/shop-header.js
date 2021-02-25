import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ShopHeader = ({ total, numItems }) => {
  return (
    <header>
      <Link to="/cart">
          {numItems} items in your cart (${total})
      </Link>
    </header>
  );
};


const mapStateToProps = ({ shoppingCart: { cartItems }}) => {
  if (cartItems.length>0){
  return {
    numItems: cartItems.map(item => item.count).reduce((t, a) => parseInt(t) + parseInt(a)),
    total: cartItems.map(item => item.total).reduce((t, a) => parseInt(t) + parseInt(a))
    }
  }
  else return {
    numItems: 0,
    total:0
  }
  };

export default connect(mapStateToProps)(ShopHeader);
