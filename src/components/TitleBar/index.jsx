import React from "react";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import CropSquareOutlinedIcon from "@mui/icons-material/CropSquareOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import * as S from "./style";

export default function TitleBar() {
  return (
    <S.Header>
      <S.Title>Milliman</S.Title>
      <S.TitleBarButtons>
        <button type="button">
          <RemoveOutlinedIcon />
        </button>
        <button type="button">
          <CropSquareOutlinedIcon />
        </button>
        <button type="button">
          <CloseOutlinedIcon />
        </button>
      </S.TitleBarButtons>
    </S.Header>
  );
}
