import TreeView from "@mui/lab/TreeView";
import FolderIcon from "@mui/icons-material/Folder";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { styled } from "styled-components";

export const CustomTreeView = styled(TreeView)`
  height: 277px;
  padding: 7px;
  overflow-y: auto;
  font-family: inherit;

  .css-1g86id8-MuiTreeItem-content .MuiTreeItem-iconContainer svg {
    font-size: 15px;
  }

  .MuiTreeItem-content {
    margin-bottom: 4px;
    padding: 0 3px;
  }

  .css-1g86id8-MuiTreeItem-content .MuiTreeItem-label {
    font-family: inherit;
  }
`;

export const ColoredFolderIcon = styled(FolderIcon)`
  color: ${({ theme }) => theme.color.yellow};
`;

export const ColoredFolderOpenIcon = styled(FolderCopyIcon)`
  color: ${({ theme }) => theme.color.yellow};
`;

export const ColoredFileIcon = styled(InsertDriveFileIcon)`
  color: ${({ theme }) => theme.color.blue};
`;
