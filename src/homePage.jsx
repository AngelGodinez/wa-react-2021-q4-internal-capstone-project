import React from 'react';
import CarouselComponent from './carousel.component';
import GridComponent from './grid.component';
import bannerResults from './featured-banners';
import productCategoriesResults from './product-categories';
import featuredProducts from './featured-products';
import HomeWrapper from './homePage.styles';

function HomePage() {
  
  function handleClick() {
    window.location.href = '/products';
  }

  return (
    <HomeWrapper>
      <CarouselComponent
        slides={bannerResults}
        width={400}
        height={300}
        /* Esto es lo que deseo añadir */
        numberOfItems={1}
      />
      <CarouselComponent
        slides={productCategoriesResults}
        width={200}
        height={100}
        /* Esto es lo que deseo añadir */
        numberOfItems={3}
      />
      <GridComponent gridItems={featuredProducts}/>
      <button type="button" onClick={handleClick}>View all products</button>
    </HomeWrapper>
  )
}

export default HomePage;
