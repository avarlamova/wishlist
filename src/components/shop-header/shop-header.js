import React from 'react';
import { Link } from 'react-router-dom';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header>
      <Link to="/">
        <div>Back </div>
      </Link>
      <Link to="/cart">
          {numItems} items (${total})
      </Link>
    </header>
  );
};

export default ShopHeader;
