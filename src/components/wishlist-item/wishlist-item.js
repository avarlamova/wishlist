import React from 'react';
import './wishlist-item.css';

const WishlistItem = ({ wish, onAddedToCart }) => {
  const { title, price, picture } = wish;
  return (
<>
        <span className="wish-title">{title}</span>
        <div className="wish-price">${price}</div>
        <img  alt='' src={picture}></img>
        <button
          onClick={onAddedToCart}>
          Add to cart
        </button>
    </>
  );
};

export default WishlistItem;