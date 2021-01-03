import React from 'react';
import './wishlist-item.css';

export default function BooklistItem({wish}) {
    
    const {name, picture} = wish;

    return (
        <>
      <div>
          {name}
      </div>

      <img src={picture} alt='cover image' />
      </>
    )
}
