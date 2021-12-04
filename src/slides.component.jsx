import React from 'react';
import { Link } from 'react-router-dom';
import SlideImage from './slides.styles';
import { SlidesWrapper } from './carousel.styles';

function SlidesComponent({
  slideIndex,
  image,
  name,
  slugs,
  currentSlideIndex,
  width,
  height
}) {
  return (
    <div key={slideIndex}>
      {slideIndex === currentSlideIndex && (
        <SlidesWrapper>
          <SlideImage width={width} height={height} src={image} alt="" />
          {name ?
          <Link to={`/products?category=${slugs}`}>
            {name}
          </Link>
          : ''}
        </SlidesWrapper>
      )}
    </div>
  )
}

export default SlidesComponent;
