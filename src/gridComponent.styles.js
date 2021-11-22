import styled from "styled-components";

const GridWrapper = styled.div`
  align-self: center;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 15px 10px;
`;

const GridItem = styled.div`
  img {
    height: 150px;
    width: 100px;
  }
`;

export {
  GridWrapper,
  GridItem
};