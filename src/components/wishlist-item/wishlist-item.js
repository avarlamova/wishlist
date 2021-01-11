import React from 'react';
import './wishlist-item.css';

export default function BooklistItem({wish, onAddedToCart}) {
    
    const {title, picture, price} = wish;

    return (
        <>
      <div>{title}</div>
      <img src={picture} alt='cover image' />
      <div> {price} </div>
      <button onClick = {onAddedToCart}> Add to cart </button>
      </>
    )
}
