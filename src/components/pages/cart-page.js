import React from 'react';
import ShoppingCartTable from '../shopping-cart/shopping-cart';
import { Link } from 'react-router-dom';


const CartPage = () => {
  return <div>
          <Link to="/">
        <div>Back </div>
      </Link>
    <ShoppingCartTable />
  </div>
};

export default CartPage;
