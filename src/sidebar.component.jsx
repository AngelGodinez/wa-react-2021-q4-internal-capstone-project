import React from 'react';
import { SidebarWrapper, SidebarTitle, FilterWrapper } from './sideBarComponent.styles';
import productCategoriesResults from './product-categories';

export default function SidebarComponent({filterValue, setFilterValue}) {
  function handleInputChecked (id, checkedStatus) {
    if ( checkedStatus ) {
      setFilterValue([...filterValue, id]);
    } else {
      setFilterValue(filterValue.filter( filter => filter !== id));
    }
  };
  return (
    <SidebarWrapper>
      <SidebarTitle>Filter by Category</SidebarTitle>
      {productCategoriesResults.map(({ id, data: { name }}) => {
        return (
          <FilterWrapper key={id}>
            <input type="checkbox" onChange={(e) => handleInputChecked(
              id, e.target.checked
              )}/>
            <label>{name}</label>
          </FilterWrapper>
        );
      })}
    </SidebarWrapper>
  )
}
