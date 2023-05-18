import React from "react";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import CropSquareOutlinedIcon from "@mui/icons-material/CropSquareOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import * as S from "./style";
import TitleBarButton from "./TitleBarButton";

export default function TitleBar() {
  return (
    <S.Header>
      <S.Title>Milliman</S.Title>
      <S.TitleBarButtons>
        <TitleBarButton message={"minimizeApp"}>
          <RemoveOutlinedIcon />
        </TitleBarButton>
        <TitleBarButton message={"maximizeApp"}>
          <CropSquareOutlinedIcon />
        </TitleBarButton>
        <TitleBarButton message={"closeApp"}>
          <CloseOutlinedIcon />
        </TitleBarButton>
      </S.TitleBarButtons>
    </S.Header>
  );
}
