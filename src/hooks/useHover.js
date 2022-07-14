import { useState } from "react";

function useHover() {
  const [hovered, setHovered] = useState(false);

  return [
    hovered,
    () => ({
      onPointerOver: (e) => {
        e.stopPropagation();
        setHovered(true);
      },
      onPointerOut: () => setHovered(false),
    }),
  ];
}

export default useHover;
