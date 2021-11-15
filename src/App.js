import React from 'react';
import HomePage from './homePage';
import HeaderComponent from './header.component';
import FooterComponent from './footer.component';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

function App() {

  return (
    <AppWrapper>
      <HeaderComponent/>      
      <HomePage/>
      <FooterComponent/>
    </AppWrapper>
  );
}

export default App;
