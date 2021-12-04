import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { SlidesWrapper, StyledSlider } from "./carousel.styles";
import SlidesComponent from "./Slides.component";

function CarouselComponent({ slides, width, height }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const maxSlidesNumber = slides.length - 1;

  const nextSlide = () => {
    setCurrentSlideIndex((currentSlideIndex) =>
      currentSlideIndex === maxSlidesNumber ? 0 : currentSlideIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlideIndex((currentSlideIndex) =>
      currentSlideIndex === 0 ? maxSlidesNumber : currentSlideIndex - 1
    );
  };

  return (
    <StyledSlider>
      <FaChevronLeft onClick={prevSlide} />
      <SlidesWrapper>
        {slides.map(({ id, slugs, data: { main_image, name } }, slideIndex) => {
          return (
            <SlidesComponent
              key={id}
              currentSlideIndex={currentSlideIndex}
              slideIndex={slideIndex}
              image={main_image.url}
              name={name}
              slugs={slugs.join()}
              width={width}
              height={height}
            />
          );
        })}
      </SlidesWrapper>
      <FaChevronRight onClick={nextSlide} />
    </StyledSlider>
  );
}

export default CarouselComponent;
