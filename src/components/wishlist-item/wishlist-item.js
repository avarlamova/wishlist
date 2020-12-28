import React from 'react';

export default function BooklistItem({wish}) {
    
    const {name, picture} = wish;

    return (
        <>
      <div>
          {name}
      </div>

      <img>{picture}</img>
      </>
    )
}
