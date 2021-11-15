import React from 'react';
import SliderComponent from './slider.component';
import CarouselComponent from './carousel.component';
import GridComponent from './grid.component';
import styled from 'styled-components';
import featured_banners from './featured-banners';

const { results } = featured_banners;

const HomeWrapper = styled.div`
  width: 95%;
`;
function HomePage() {
  return (
    <HomeWrapper>
      <SliderComponent slides={results}/>
      <CarouselComponent/>
      <GridComponent/>
    </HomeWrapper>
  )
}

export default HomePage;
