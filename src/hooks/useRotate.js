import { useEffect } from "react";
// import { useThree } from "@react-three/fiber";
import { useDrag as useGestureDrag } from "@use-gesture/react";
import { useAtomValue } from "jotai";
import { MathUtils } from "three";
import { toolTypeAtom } from "../atoms";

function useRotate(api, rotation, setRotation) {
  const toolType = useAtomValue(toolTypeAtom);
  const bind = useGestureDrag(({ swipe: [swipeX, swipeY] }) => {
    const [x, y, z] = rotation;

    if (Math.abs(swipeX) === 1) {
      console.log(swipeX, swipeY);
      console.log(y - MathUtils.degToRad(45) * swipeX);
      console.log(
        `x: ${MathUtils.radToDeg(x)}, y: ${MathUtils.radToDeg(
          y
        )}, z: ${MathUtils.radToDeg(z)}`
      );

      api.rotation.set(0, y - MathUtils.degToRad(45) * swipeX, 0);
    }
  });

  // useEffect(() => api.quaternion.subscribe((q) => setQuaternion(q)));
  useEffect(
    () =>
      api.rotation.subscribe((r) => {
        setRotation(r);
      }),
    [api, setRotation]
  );

  return () => (toolType === "rotator" ? bind() : {});
}

export default useRotate;
