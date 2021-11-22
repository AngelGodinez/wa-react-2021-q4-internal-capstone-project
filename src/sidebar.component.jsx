import React, { useContext } from 'react';
import { SidebarWrapper } from './sideBarComponent.styles';
import productCategoriesResults from './product-categories';
import { SideBarContext } from './productListPage';

export default function SidebarComponent() {
  const { filterValue, setFilterValue } = useContext(SideBarContext);
  function handleInputChecked (id, checkedStatus) {
    if ( checkedStatus ) {
      setFilterValue([...filterValue, id]);
    } else {
      setFilterValue(filterValue.filter( filter => filter !== id));
    }
  };
  return (
    <SidebarWrapper>
      {productCategoriesResults.map(({ id, data: { name }}) => {
        return (
          <div key={id}>
            <input type="checkbox" onChange={(e) => handleInputChecked(
              id, e.target.checked
              )}/>
            <label>{name}</label>
          </div>
        );
      })}
    </SidebarWrapper>
  )
}
