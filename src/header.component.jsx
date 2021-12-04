import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { HeaderWrapper, CartWrapper } from './headerComponent.styles';

function HeaderComponent() {
  const cartQuantity = 0;
  return (
    <HeaderWrapper>      
      <Link className="brand__name" to='/home'>
        THE SHOP
      </Link>
      <div>
        <input type="text" />
        <button type="button">search</button>
      </div>
      <CartWrapper>
        <FaShoppingCart/>&nbsp;&nbsp;({cartQuantity})
      </CartWrapper>
    </HeaderWrapper>
  )
}

export default HeaderComponent;
