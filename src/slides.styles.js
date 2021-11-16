import styled from "styled-components";

const SlideImage = styled.img`
  width: ${props => props.width ? `${props.width}px` : '200px'};
  height: ${props => props.height ? `${props.height}px` : '100px'};
  object-fit: cover;
`;

export default SlideImage;
