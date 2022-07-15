import { useAtomValue, useSetAtom } from "jotai";

import { colorAtom, toolTypeAtom } from "../atoms";

function usePaint(index) {
  const toolType = useAtomValue(toolTypeAtom);
  const setColor = useSetAtom(colorAtom);
  const bind = () => ({
    onPointerDown: (e) => {
      e.stopPropagation();
      setColor((prev) => ({
        ...prev,
        current: { index, name: e.object.material.name },
      }));
    },
  });

  return () => (toolType === "painter" ? bind() : {});
}

export default usePaint;
