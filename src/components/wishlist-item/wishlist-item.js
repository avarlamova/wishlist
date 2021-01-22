import React from 'react';
import './wishlist-item.css';

const WishlistItem = ({ wish, onAddedToCart }) => {
  const { title, price, picture } = wish;
  return (
    <>
      <span>{title}</span>
      <span> ${price}</span>
      <img src={picture}></img>
      <button onClick={onAddedToCart}> Add to cart </button>
    </>
  );
};

export default WishlistItem;
