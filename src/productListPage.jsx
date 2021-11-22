import React from 'react';
import { ProductListWrapper } from './productListPageStyles';
import GridComponent from './grid.component';
import SidebarComponent from './sidebar.component';
import Products from './products'

function ProductListPage() {
  return (
    <ProductListWrapper>
      <div className="container">
        <SidebarComponent/>
        <div className="base__flex list__container">
          <GridComponent gridItems={Products}/>
          <div className="base__flex pagination__buttons">
            <button type="button">Page 1</button>
            <button type="button"> - Pagination - </button>
            <button type="button">End</button>
          </div>
        </div>
      </div>
    </ProductListWrapper>
  )
}

export default ProductListPage;
