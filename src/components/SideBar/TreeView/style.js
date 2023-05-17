import TreeView from "@mui/lab/TreeView";
import FolderIcon from "@mui/icons-material/Folder";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { styled } from "styled-components";

export const CustomTreeView = styled(TreeView)`
  .css-1g86id8-MuiTreeItem-content .MuiTreeItem-iconContainer svg {
    font-size: 15px;
  }

  .css-1g86id8-MuiTreeItem-content .MuiTreeItem-label {
    font-family: inherit;
    padding: 2px;
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
