import React from 'react';
import './wishlist-item.css';

const WishlistItem = ({ wish, onAddedToCart }) => {
  const { title, price, picture } = wish;
  return (
        <div className="item">
          <img src={picture} alt=" " />
          <h6>{title}</h6>
          <p>${price}</p>
          <button className="btn btn-sm btn-primary" onClick={onAddedToCart}> 
          Add to cart
          </button>
        </div>
  );
};

export default WishlistItem;
