import React from 'react';
import CarouselComponent from './carousel.component';
import GridComponent from './grid.component';
import bannerResults from './featured-banners';
import productCategoriesResults from './product-categories';
import HomeWrapper from './homePage.styles';

function HomePage() {
  return (
    <HomeWrapper>
      <CarouselComponent
        slides={bannerResults}
        width={400}
        height={300}
      />
      <CarouselComponent
        slides={productCategoriesResults}
        width={200}
        height={100}
      />
      <GridComponent/>
    </HomeWrapper>
  )
}

export default HomePage;
