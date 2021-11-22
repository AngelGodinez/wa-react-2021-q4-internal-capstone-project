import React from 'react';
import {GridWrapper, GridItem} from './gridComponent.styles';
import { SlidesWrapper } from './carousel.styles';

function GridComponent({gridItems}) {
  console.log({gridItems});
  return (
    <GridWrapper>
      {gridItems.map(({ id, data: { mainimage, name, price, category}}) => {
        return (
          <GridItem key={id}>
            <SlidesWrapper>
              <img src={mainimage.url} alt="" />
              <span>{price}</span>
              <span>{name}</span>
              <span>{category.slug}</span>
            </SlidesWrapper>
          </GridItem>
        );
      })}
    </GridWrapper>
  )
}

export default GridComponent;
