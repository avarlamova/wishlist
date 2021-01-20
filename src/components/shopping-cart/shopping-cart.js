import React from 'react';
import {wishAddedToCart, wishRemovedFromCart, allRemovedFromCart} from '../../actions/index';
import {connect} from 'react-redux';

const ShoppingCart = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    const renderRow = (item, idx) => {
      const { id, title, count, total } = item;
      return (
        <tr key={id}>
          <td>{idx + 1}</td>
          <td>{title}</td>
          <td>{count}</td>
          <td>${total}</td>
          <td>
            <button>
              onClick={() => onDelete(id)}
            </button>
            <button>
              onClick={() => onIncrease(id)}
            </button>
            <button
              onClick={() => onDecrease(id)}>
            </button>
          </td>
        </tr>
      );
    };
  
    return (
      <div>
        <h2>Your Order</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Count</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
  
          <tbody>
          { items.map(renderRow) }
          </tbody>
        </table>
  
        <div className="total">
          Total: ${total}
        </div>
      </div>
    );
  };
  
//подключение к Redux
const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = { 
    onIncrease: wishAddedToCart, onDecrease: wishRemovedFromCart, onDelete: allRemovedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
