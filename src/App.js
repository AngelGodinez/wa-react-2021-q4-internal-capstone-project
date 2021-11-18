import React from 'react';
import AppWrapper from './appStyles';
import HomePage from './homePage';
import ProductListPage from './productListPage';
import HeaderComponent from './header.component';
import FooterComponent from './footer.component';

function App() {
  return (
    <AppWrapper>
      <HeaderComponent/>
      { window.location.pathname === '/products' ? <ProductListPage/> : <HomePage/>}
      <FooterComponent/>
    </AppWrapper>
  );
}

export default App;
