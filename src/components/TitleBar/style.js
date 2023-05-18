import { styled } from "styled-components";

export const Header = styled.header`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.lightGray};
  position: relative;
  -webkit-app-region: drag;
`;

export const Title = styled.h1`
  font-weight: bold;
  color: ${({ theme }) => theme.color.black};
`;

export const TitleBarButtons = styled.div`
  position: absolute;
  right: 4px;
  -webkit-app-region: no-drag;

  button {
    margin: 0 4px;
    svg {
      vertical-align: top;
      color: ${({ theme }) => theme.color.gray};
    }
  }
`;
