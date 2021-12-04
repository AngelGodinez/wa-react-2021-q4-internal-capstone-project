import styled from "styled-components";
import { device } from "./device";

const GridWrapper = styled.div`
  align-self: center;
  width: 80%;
  display: grid;
  
  @media ${device.mobileM} {
    grid-template-columns: 1fr;
  }
  @media ${device.mobileL} { 
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.laptop} { 
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media ${device.laptopL} { 
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media ${device.desktop} { 
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  grid-template-rows: auto;
  gap: 15px 10px;
`;

const GridItem = styled.div`
  text-align: center;
  img {
    height: 150px;
    width: 100px;
    padding-bottom: 5px;
  }
  span {
    margin: 3.5px 0;
    text-transform: capitalize;
  }
`;

export {
  GridWrapper,
  GridItem
};