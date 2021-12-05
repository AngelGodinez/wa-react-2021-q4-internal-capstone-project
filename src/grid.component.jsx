import React from 'react';
import { Link } from 'react-router-dom';

import {GridWrapper, GridItem} from './gridComponent.styles';
import { SlidesWrapper } from './carousel.styles';

function GridComponent({gridItems}) {
  return (
    <GridWrapper>
      {gridItems.map(({ id, data: { mainimage, name, price, category}}) => {
        return (
          <GridItem key={id}>
            <SlidesWrapper>
              <img src={mainimage.url} alt="" />
              <span>$&nbsp;{price}</span>
              <span>{name}</span>
              <Link to={`/products?category=${category.slug}`}>
                <span>{category.slug}</span>
              </Link>
              <div>
                <button type='button'>Add to cart</button>
                <Link to={`/product/${id}`}>
                  <button type='button'>Details</button>
                </Link>
              </div>
            </SlidesWrapper>
          </GridItem>
        );
      })}
    </GridWrapper>
  )
}

export default GridComponent;
