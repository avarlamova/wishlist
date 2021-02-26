import React from 'react';
import { connect } from 'react-redux';
import icon from './favicon-16x16.png';
import './shopping-cart.css';

import {wishAddedToCart,wishRemovedFromCart, allRemovedFromCart, clearCart } from '../../actions';

const ShoppingCartTable = ({ items, onIncrease, onDecrease, onDelete, clearCart }) => {
  let totalForOrder = items.map(item => item.total);
  if (totalForOrder.length>0) {
    totalForOrder = totalForOrder.reduce((t, a) => parseInt(t) + parseInt(a))
  }
  else totalForOrder = 0;
  const renderRow = (item, idx) => {
    const { id, title, count, total, price } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${price}</td>
        <td>${total}</td>
        <td>
          <div role="group" className="btn-btn-group-sm">
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success float-right">
            +
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning float-right">
            -
          </button>
          <button
            onClick={() => onDelete(id)}
            className="btn float-right">
            <img className="delete-btn" alt='Delete' src={icon}></img>
          </button>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h3>Your Order</h3>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th> Sum </th>
          </tr>
        </thead>

        <tbody>
        { items.map(renderRow) }
        </tbody>
      </table>

     <button className="btn btn-secondary btn-sm clear-btn" onClick={clearCart}> 
      Clear the cart 
      </button> 

      <h4>
        Total: $ {totalForOrder}
      </h4>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems }}) => {
  return {
    items: cartItems,
  };
};

const mapDispatchToProps = {
  onIncrease: wishAddedToCart,
  onDecrease: wishRemovedFromCart,
  onDelete: allRemovedFromCart,
  clearCart: clearCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
