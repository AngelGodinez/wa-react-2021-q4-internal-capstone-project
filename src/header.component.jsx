import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { HeaderWrapper, CartWrapper } from './headerComponent.styles';

function HeaderComponent() {
  const cartQuantity = 0;
  function handleClick() {
    window.location.href = '/';
  }
  return (
    <HeaderWrapper>      
      <span className="brand__name" onClick={handleClick}>
        THE SHOP
      </span>
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
