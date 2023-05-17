import React from "react";
import { Resizable } from "re-resizable";

export default function Resizer({ children }) {
  return (
    <Resizable
      enable={{
        bottom: true,
      }}
      defaultSize={{ height: 277 }}
      handleStyles={{
        bottom: {
          bottom: 0,
        },
      }}
      style={{ overflowY: "auto" }}
    >
      {children}
    </Resizable>
  );
}
