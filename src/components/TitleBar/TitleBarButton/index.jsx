import React from "react";

export default function TitleBarButton({ message, children }) {
  const handleClick = () => {
    window.ipcRenderer.send(message);
  };

  return <button onClick={handleClick}>{children}</button>;
}
