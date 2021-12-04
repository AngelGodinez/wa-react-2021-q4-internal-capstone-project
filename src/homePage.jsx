import React from 'react';
import { Link } from 'react-router-dom';

import { API_TYPES } from './utils/constants';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

import CarouselComponent from './Carousel.component';
import GridComponent from './Grid.component';
import HomeWrapper from './homePage.styles';


function HomePage() {
  const { data: featuredBanners, isLoading: featuredBannersIsLoading } = useFeaturedBanners(API_TYPES.BANNER, 5);  
  const { data: featuredCategory, isLoading: featuredCategoryIsLoading } = useFeaturedBanners(API_TYPES.CATEGORY, 30);  
  const { data: featuredProducts, isLoading: featuredProductsIsLoading } = useFeaturedBanners(API_TYPES.PRODUCT, 16);  
  return (
    <HomeWrapper>

      {featuredBannersIsLoading ?
        <>LOADING...</>
      : <CarouselComponent
        slides={featuredBanners.results}
        width={400}
        height={300} />
      }
      
      {featuredCategoryIsLoading ?
      <>LOADING... </>
      : <CarouselComponent
        slides={featuredCategory.results}
        width={200}
        height={100}
      />}

      {featuredProductsIsLoading ?
      <>LOADING... </>
      :<GridComponent gridItems={featuredProducts.results}/>}

      <Link to='/products'>
        <button type='button'>View all products</button>
      </Link>
      
    </HomeWrapper>
  )
}

export default HomePage;
