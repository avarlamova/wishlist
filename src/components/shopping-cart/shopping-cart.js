import React from 'react';
import { connect } from 'react-redux';
import { wishAddedToCart, wishRemovedFromCart, allRemovedFromCart } from '../../actions';

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
          <button onClick={() => onIncrease(id)}> +
          </button>
          <button
            onClick={() => onDecrease(id)}> -
          </button>
          <button
            onClick={() => onDelete(id)}> Delete
          </button>
        </td>
      </tr>
    );
  };

  return (
      <>
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Wish</th>
            <th>Count</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
        { items.map(renderRow) }
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = () => {
  return {
    onIncrease: wishAddedToCart, onDecrease: wishRemovedFromCart, onDelete: allRemovedFromCart}
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
