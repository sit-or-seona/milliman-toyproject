import { styled } from "styled-components";
import { Collapse } from "antd";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const { Panel } = Collapse;

export const SideBar = styled.aside`
  position: fixed;
  left: 0;
  top: 30px;
  width: 230px;
  height: calc(100% - 30px);
  border-right: 1px solid ${({ theme }) => theme.color.mediumGray};
`;

export const CustomPanel = styled(Panel)`
  background-color: white;

  .ant-collapse-header {
    height: 23px;
    padding: 0 5px !important;
    background-color: ${({ theme }) => theme.color.mediumGray};

    .ant-collapse-header-text {
      font-family: "Inter", sans-serif;
      line-height: 23px;
      font-size: 10px;
      color: ${({ theme }) => theme.color.black};
    }
  }

  .ant-collapse-content-box {
    font-family: "Inter", sans-serif;
    padding: 0 !important;
  }

  .ant-collapse-expand-icon {
    padding-inline-end: 3px !important;
  }
`;

export const CollapseIcon = styled(PlayArrowIcon)`
  transform: rotate(${(props) => props.rotate}deg);
  padding: 1px;
`;
