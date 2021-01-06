import React from 'react';
import './wishlist-item.css';

export default function BooklistItem({wish, onAddedToCart}) {
    
    const {name, picture} = wish;

    return (
        <>
      <div>{name}</div>
      <img src={picture} alt='cover image' />
      <button onClick = {onAddedToCart}> Add to cart </button>
      </>
    )
}
