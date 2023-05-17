import React from "react";
import * as S from "./style";
import { Collapse } from "antd";
import { categoryData } from "./categoryData";
import TreeView from "./TreeView";

export default function SideBar() {
  return (
    <S.SideBar>
      <h2 className="sr-only">Side Bar</h2>
      <Collapse bordered={false}>
        {categoryData.map((category) => (
          <S.CustomPanel key={category.id} header={category.name}>
            <TreeView>{category.children}</TreeView>
          </S.CustomPanel>
        ))}
      </Collapse>
    </S.SideBar>
  );
}
