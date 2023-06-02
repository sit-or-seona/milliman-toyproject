import React, { useState } from "react";
import * as S from "./style";
import { Collapse } from "antd";
import { categoryData } from "./categoryData";
import TreeView from "./TreeView";
import Resizer from "./Resizer";

export default function SideBar() {
  const [activePanel, setActivePanel] = useState([]);

  return (
    <S.SideBar>
      <h2 className="sr-only">Side Bar</h2>
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => (
          <S.CollapseIcon rotate={isActive ? 90 : 0} />
        )}
        activeKey={activePanel}
        onChange={(e) => {
          e.length > 1 && e.shift();
          setActivePanel(e);
        }}
      >
        {categoryData.map((category) => (
          <S.CustomPanel key={category.id} header={category.name}>
            {category !== categoryData[categoryData.length - 1] ? (
              <Resizer count={categoryData.length - 1}>
                <TreeView>{category.children}</TreeView>
              </Resizer>
            ) : (
              <TreeView>{category.children}</TreeView>
            )}
          </S.CustomPanel>
        ))}
      </Collapse>
    </S.SideBar>
  );
}
