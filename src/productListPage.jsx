import React, { useState, useEffect } from 'react';

import useQuery from './utils/hooks/useQuery';
import { ProductListWrapper } from './productListPageStyles';
import GridComponent from './Grid.component';
import SidebarComponent from './Sidebar.component';
import Paginator from './Paginator.component';
import Products from './products';

function ProductListPage() {
  const [filteredProducts, setFilteredProducts] = useState(Products);
  const [filterValue, setFilterValue] = useState([]);
  const query = useQuery('category');
  console.log({query});
  useEffect(()=> {
    function handleFilterProducts() {
      const filteredProducts = Products.filter(el => 
        filterValue.includes(el.data.category.id
      ));
      if ( filterValue.length <= 0 ) return Products;
      return filteredProducts;
    };
    setFilteredProducts(
      handleFilterProducts()
    );
  }, [filterValue]);
  return (
    <ProductListWrapper>
      <div className="container">
        <SidebarComponent
          filterValue={filterValue}
          setFilterValue={setFilterValue}/>
        <div className="base__flex list__container">
          {filteredProducts.length > 0 ?
            <>
            <GridComponent gridItems={filteredProducts}/>
            <Paginator />
            </>
            : <div>NO ITEMS FOUND</div>
          }
        </div>
      </div>
    </ProductListWrapper>
  )
}

export default ProductListPage;
