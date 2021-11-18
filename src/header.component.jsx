import React from 'react';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

const HeaderWrapper = styled.div`
  overflow: hidden;
  z-index: 10;
  background-color: #5a5a5a;
  position: fixed;
  top: 0;
  width: 100%;
  height: 85px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  align-items: center;
  img {
    max-height: 40px;
    padding-right: 20px;
  }
  .brand__name {
    padding-left: 60px;
    font-size: 20px;
  }
`;

const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
  border: 1px solid white;
  border-radius: 4px;
  padding: 5px 10px;
  margin-right: 60px;
`;
function HeaderComponent() {
  const cartQuantity = 0;
  return (
    <HeaderWrapper>      
      <span className="brand__name">
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
