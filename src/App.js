import React from 'react';
import { Routes, Route } from "react-router-dom";
import AppWrapper from './appStyles';
import HomePage from './homePage';
import ProductListPage from './productListPage';
import ProductPage from './productPage';
import SearchPage from './searchPage';
import HeaderComponent from './Header.component';
import FooterComponent from './Footer.component';

function App() {  
  return (
    <AppWrapper>
      <HeaderComponent/>
        <Routes>
          {["/", "/home"].map((path, index) => 
            <Route exact path={path} element={<HomePage />} key={index} />
          )}
          <Route path="/products" element={<ProductListPage />}/>
          <Route path="/search" element={<SearchPage />}/>
          <Route path="/product/:productId" element={<ProductPage />} >
          </Route>
        </Routes>
      <FooterComponent/>
    </AppWrapper>
  );
}

export default App;
