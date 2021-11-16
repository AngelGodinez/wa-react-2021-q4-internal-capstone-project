import styled from "styled-components";

const StyledSlider = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SlidesWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export {
  StyledSlider,
  SlidesWrapper
};