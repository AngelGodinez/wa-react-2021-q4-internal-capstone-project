import styled from "styled-components";

const HeaderWrapper = styled.div`
  overflow: hidden;
  z-index: 10;
  background-color: #5a5a5a;
  position: fixed;
  top: 0;
  width: 100%;
  height: 85px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  align-items: center;
  img {
    max-height: 40px;
    padding-right: 20px;
  }
  .brand__name {
    padding-left: 60px;
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
    color: white;
  }
`;

const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
  border: 1px solid white;
  border-radius: 4px;
  padding: 5px 10px;
  margin-right: 60px;
`;

export {
  HeaderWrapper,
  CartWrapper
};