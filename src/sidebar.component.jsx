import React from 'react';
import { SidebarWrapper } from './sideBarComponent.styles';
import productCategoriesResults from './product-categories';

export default function SidebarComponent() {
  console.log({productCategoriesResults});
  return (
    <SidebarWrapper>
      {productCategoriesResults.map(({ id, data: { name }}) => {
        return (
          <div key={id}>
            <input type="checkbox"/>
            <label>{name}</label>
          </div>
        );
      })}
    </SidebarWrapper>
  )
}
