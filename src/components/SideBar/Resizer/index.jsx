import React, { useEffect, useState } from "react";
import { Resizable } from "re-resizable";

export default function Resizer({ children, count }) {
  const [height, setHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const minusHeight = count * 23 + 53;

  window.onresize = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    setHeight(windowHeight - minusHeight);
  }, [windowHeight, minusHeight]);

  return (
    <Resizable
      enable={{
        bottom: true,
      }}
      size={{ height: height }}
      onResizeStop={(e, dir, ref, d) => {
        setHeight(height + d.height);
      }}
      handleStyles={{
        bottom: {
          bottom: 0,
        },
      }}
      style={{ overflowY: "auto", position: "static" }}
    >
      {children}
    </Resizable>
  );
}
