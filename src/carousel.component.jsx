import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const SlideImage = styled.img`
  width: 200px;
  height: 100px;
  object-fit: cover;
`;

const StyledSlider = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .slides {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

function CarouselComponent({slides}) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <StyledSlider>
      <FaChevronLeft
        onClick={prevSlide}
      />
      <div className="slides">
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <div className="slides">
              <SlideImage src={slide.data.main_image.url} alt=""/>
              {slide.data.name}
              </div>
            )}
          </div>
        )
      })}
      </div>
      <FaChevronRight
        onClick={nextSlide}
      />
    </StyledSlider>
  )
}

export default CarouselComponent;
