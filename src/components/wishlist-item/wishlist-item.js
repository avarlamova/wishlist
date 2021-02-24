import React from 'react';
import './wishlist-item.css';

const WishlistItem = ({ wish, onAddedToCart }) => {
  const { title, price, picture } = wish;
  return (
        <div>
          <img src={picture} alt=" " />
          <span>{title}</span>
          <div>${price}</div>
          <button onClick={onAddedToCart}> 
          Add to cart
          </button>
        </div>
  );
};

export default WishlistItem;
