import React from "react";
import * as S from "./style";
import Collapse from "./Collapse";
import { categoryData } from "./categoryData";

export default function SideBar() {
  return (
    <S.SideBar>
      {categoryData.map((category) => {
        return (
          <Collapse key={category.id} header={category.name}>
            {category.children}
          </Collapse>
        );
      })}
    </S.SideBar>
  );
}
