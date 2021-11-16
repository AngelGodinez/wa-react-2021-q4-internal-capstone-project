import React from 'react';
import SlideImage from './slides.styles';
import { SlidesWrapper } from './carousel.styles';

function SlidesComponent({
  slideIndex,
  image,
  name,
  currentSlideIndex,
  width,
  height
}) {
  return (
    <div key={slideIndex}>
      {slideIndex === currentSlideIndex && (
        <SlidesWrapper>
          <SlideImage width={width} height={height} src={image} alt="" />
          {name}
        </SlidesWrapper>
      )}
    </div>
  )
}

export default SlidesComponent;
