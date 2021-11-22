import styled from "styled-components";

const ProductListWrapper = styled.div`
  width: 100%;
  .base__flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .container {
    display: grid;
    grid-template-columns: 25% 75%;
    gap: 15px 10px;
    justify-items: center;
  }
  .list__container {
    width: 90%;
  }
  .pagination__buttons {
    flex-direction: row;
  }
`;

export {
  ProductListWrapper
}