import React from "react";
import * as S from "./style";
import Collapse from "./Collapse";
import { categoryData } from "./categoryData";
import TreeView from "./TreeView";

export default function SideBar() {
  return (
    <S.SideBar>
      {categoryData.map((category) => {
        return (
          <Collapse key={category.id} header={category.name}>
            <TreeView>{category.children}</TreeView>
          </Collapse>
        );
      })}
    </S.SideBar>
  );
}
