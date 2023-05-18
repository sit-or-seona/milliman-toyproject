import React from "react";
const { ipcRenderer } = window.require("electron");

export default function TitleBarButton({ message, children }) {
  const handleClick = () => {
    ipcRenderer.send(message);
  };

  return <button onClick={handleClick}>{children}</button>;
}
