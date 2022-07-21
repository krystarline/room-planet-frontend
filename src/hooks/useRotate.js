import { useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { toolTypeAtom } from "../atoms";

function useRotate(api, rotation, setRotation) {
  const [count, setCount] = useState(0);
  const toolType = useAtomValue(toolTypeAtom);

  const handleClick = () => {
    api.rotation.set(0, Math.PI * 0.5 * (count + 1), 0);

    if (count >= 3) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  useEffect(
    () =>
      api.rotation.subscribe((r) => {
        setRotation(r);
      }),
    [api, setRotation]
  );

  return () => (toolType === "rotator" ? { onClick: handleClick } : {});
}

export default useRotate;
