import React from 'react';
import styled from 'styled-components';
import emptycart from './assets/empty-shopping-cart.png';

const HeaderWrapper = styled.div`
  overflow: hidden;
  z-index: 10;
  background-color: #5a5a5a;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
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
    padding-left: 8px;
    font-size: 20px;
  }
`;

function HeaderComponent() {
  return (
    <HeaderWrapper>      
      <span className="brand__name">
        THE SHOP
      </span>
      <div>
        <input type="text" />
        <button type="button">search</button>
      </div>
      <img src={emptycart} alt="cart"/>
    </HeaderWrapper>
  )
}

export default HeaderComponent;
