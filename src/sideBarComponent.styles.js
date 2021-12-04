import styled from "styled-components";

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: baseline;
`;

const SidebarTitle = styled.div`
  margin: 1rem auto;
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

export {
  SidebarWrapper,
  SidebarTitle,
  FilterWrapper,
}