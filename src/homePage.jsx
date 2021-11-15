import React from 'react';
import SliderComponent from './slider.component';
import CarouselComponent from './carousel.component';
import GridComponent from './grid.component';
import styled from 'styled-components';
import bannerResults from './featured-banners';
import productCategoriesResults from './product-categories';

const HomeWrapper = styled.div`
  width: 95%;
  bottom: 50px;
`;
function HomePage() {
  return (
    <HomeWrapper>
      <SliderComponent slides={bannerResults}/>
      <CarouselComponent slides={productCategoriesResults}/>
      <GridComponent/>
    </HomeWrapper>
  )
}

export default HomePage;
