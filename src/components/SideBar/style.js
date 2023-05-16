import { Collapse } from "antd";
import { styled } from "styled-components";

const { Panel } = Collapse;

export const SideBar = styled.aside`
  width: 230px;
  height: calc(100vh - 30px);
  border-right: 1px solid ${({ theme }) => theme.color.mediumGray};
`;

export const CustomCollapse = styled(Collapse)`
  background-color: white;

  .ant-collapse-item {
    border: none;
  }
`;

export const CustomPanel = styled(Panel)`
  .ant-collapse-header {
    padding: 0 5px !important;
    height: 23px;
    background-color: ${({ theme }) => theme.color.mediumGray};

    .ant-collapse-header-text {
      line-height: 23px;
      font-size: 10px;
      color: ${({ theme }) => theme.color.black};
    }
  }

  .ant-collapse-content-box {
    margin-bottom: 16px;
  }
`;
