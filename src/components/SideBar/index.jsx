import React from "react";
import * as S from "./style";

export default function SideBar() {
  return (
    <S.SideBar>
      <S.CustomCollapse bordered={false}>
        <S.CustomPanel header="Category 1" key="1"></S.CustomPanel>
        <S.CustomPanel header="Category 2" key="2"></S.CustomPanel>
      </S.CustomCollapse>
    </S.SideBar>
  );
}
