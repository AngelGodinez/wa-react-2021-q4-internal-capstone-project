import React from 'react';
import { ProductListWrapper } from './productListPageStyles';
import GridComponent from './grid.component';
import featuredProducts from './featured-products';

function ProductListPage() {
  return (
    <ProductListWrapper>
      <div className="container">
        <div>sidebar</div>
        <div className="list__container">
          <GridComponent gridItems={featuredProducts}/>
          <button type="button">pagination</button>
        </div>
      </div>
    </ProductListWrapper>
  )
}

export default ProductListPage;
