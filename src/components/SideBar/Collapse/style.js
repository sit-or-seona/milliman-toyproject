import { Collapse } from "antd";
import { styled } from "styled-components";

const { Panel } = Collapse;

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
    padding: 0 !important;
  }
`;
