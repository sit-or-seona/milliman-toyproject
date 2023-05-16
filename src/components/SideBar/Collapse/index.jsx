import React from "react";
import * as S from "./style";

export default function Collapse({ header, children }) {
  return (
    <S.CustomCollapse bordered={false}>
      <S.CustomPanel header={header}>{children}</S.CustomPanel>
    </S.CustomCollapse>
  );
}
