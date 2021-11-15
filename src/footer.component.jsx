import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  overflow: hidden;
  background-color: #333;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  margin-top: auto;
  flex: 0 0 50px;
  flex-direction: row;
  justify-content: space-around;
  color: white;
  align-items: center;
`;

function FooterComponent() {
  return (
    <FooterWrapper>
      saludos
      saludos
    </FooterWrapper>
  )
}

export default FooterComponent;
