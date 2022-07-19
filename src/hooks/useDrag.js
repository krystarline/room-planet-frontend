import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { useDrag as useGeatureDrag } from "@use-gesture/react";
import { useAtomValue } from "jotai";

import { toolTypeAtom } from "../atoms";

function useDrag(api, position, setPosition) {
  const { size, viewport } = useThree();
  const toolType = useAtomValue(toolTypeAtom);
  const aspect = size.width / viewport.width;
  const bind = useGeatureDrag(({ offset: [ox, oz] }) => {
    const [, y] = position;

    api.position.set(ox / aspect, y, oz / aspect);
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
