import { styled } from "styled-components";
import { Collapse } from "antd";

const { Panel } = Collapse;

export const SideBar = styled.aside`
  position: fixed;
  left: 0;
  top: 30px;
  width: 230px;
  height: calc(100% - 30px);
  border-right: 1px solid ${({ theme }) => theme.color.mediumGray};

  .bottom-handle {
    bottom: 0 !important;
  }
`;

export const CustomPanel = styled(Panel)`
  background-color: white;

  .ant-collapse-header {
    height: 23px;
    padding: 0 5px !important;
    background-color: ${({ theme }) => theme.color.mediumGray};

    .ant-collapse-header-text {
      line-height: 23px;
      font-size: 10px;
      color: ${({ theme }) => theme.color.black};
    }
  }

  .ant-collapse-content-box {
    padding: 0 !important;
  }
`;
