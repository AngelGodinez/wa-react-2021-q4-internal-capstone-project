import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: white;
  align-items: center;
`;

function HeaderComponent() {
  return (
    <HeaderWrapper>
      texto
      texto
      texto
      texto
    </HeaderWrapper>
  )
}

export default HeaderComponent;
