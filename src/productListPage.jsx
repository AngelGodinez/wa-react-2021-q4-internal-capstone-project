import React, { createContext, useState, useEffect } from 'react';
import { ProductListWrapper } from './productListPageStyles';
import GridComponent from './grid.component';
import SidebarComponent from './sidebar.component';
import Products from './products';

export const SideBarContext = createContext();

function ProductListPage() {
  const [filteredProducts, setFilteredProducts] = useState(Products);
  const [filterValue, setFilterValue] = useState(['']);
  useEffect(()=> {
    function handleFilterProducts() {
      if ( filterValue.length === 1 && filterValue[0] === '' ) {
        return Products;
      }
      return Products.filter(el => 
        filterValue.includes(el.data.category.id
      ))
    };
    setFilteredProducts(
      handleFilterProducts()
    );
  }, [filterValue]);
  return (
    <ProductListWrapper>
      <div className="container">
        <SideBarContext.Provider value={{
          filterValue, setFilterValue
        }}>
          <SidebarComponent/>          
        </SideBarContext.Provider>
        <div className="base__flex list__container">
          {filteredProducts.length > 0 ?
            <>
            <GridComponent gridItems={filteredProducts}/>
            <div className="base__flex pagination__buttons">
              <button type="button">Page 1</button>
              <button type="button"> - Pagination - </button>
              <button type="button">End</button>
            </div>
            </>
            : <div>NO ITEMS FOUND</div>
          }
        </div>
      </div>
    </ProductListWrapper>
  )
}

export default ProductListPage;
