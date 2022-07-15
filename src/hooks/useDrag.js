import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { useDrag as useGeatureDrag } from "@use-gesture/react";
import { useAtomValue } from "jotai";

import { toolTypeAtom } from "../atoms";

function useDrag(api, position, setPosition) {
  const toolType = useAtomValue(toolTypeAtom);
  const { size, viewport } = useThree();
  const bind = useGeatureDrag(({ offset: [,], movement: [x, z] }) => {
    const aspect = size.width / viewport.width;
    const [, y] = position;

    api.position.set(x / aspect, y, z / aspect);
  });

  useEffect(
    () =>
      api.position.subscribe((p) => {
        setPosition(p);
      }),
    [api, setPosition]
  );

  return () => (toolType === "dragger" ? bind() : {});
}

export default useDrag;
