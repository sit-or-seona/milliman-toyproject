import { styled } from "styled-components";

export const SideBar = styled.aside`
  width: 230px;
  height: calc(100vh - 30px);
  border-right: 1px solid ${({ theme }) => theme.color.mediumGray};
`;
