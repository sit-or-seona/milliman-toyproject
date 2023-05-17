import React from "react";
import TreeItem from "@mui/lab/TreeItem";
import * as S from "./style";

export default function TreeView({ children }) {
  const renderTree = (nodes) => {
    return (
      <TreeItem
        key={nodes.id}
        nodeId={nodes.id}
        label={nodes.name}
        icon={nodes.id.length > 3 && <S.ColoredFileIcon />}
      >
        {Array.isArray(nodes.children)
          ? nodes.children.map((node) => renderTree(node))
          : null}
      </TreeItem>
    );
  };

  return (
    <S.CustomTreeView
      aria-label="category-items"
      defaultCollapseIcon={<S.ColoredFolderOpenIcon />}
      defaultExpanded={children.map((nodes) => nodes.id)}
      defaultParentIcon={<S.ColoredFolderIcon />}
      defaultEndIcon={<S.ColoredFolderIcon />}
    >
      {Array.isArray(children)
        ? children.map((nodes) => renderTree(nodes))
        : renderTree(children)}
    </S.CustomTreeView>
  );
}
