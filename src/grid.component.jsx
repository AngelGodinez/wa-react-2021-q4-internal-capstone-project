import React from 'react';
import {GridWrapper, GridItem} from './gridComponent.styles';
import { SlidesWrapper } from './carousel.styles';

function GridComponent({gridItems}) {
  return (
    <GridWrapper>
      {gridItems.map(({ id, data: { mainimage, name}}) => {
        return (
          <GridItem key={id}>
            <SlidesWrapper>
              <img src={mainimage.url} alt="" />
              <span>{name}</span>
            </SlidesWrapper>
          </GridItem>
        );
      })}
    </GridWrapper>
  )
}

export default GridComponent;
