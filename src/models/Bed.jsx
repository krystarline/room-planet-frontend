import { useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { useAtomValue } from "jotai";
import React, { useState } from "react";

import { colorItemsAtom } from "../atoms";
import { useDrag, usePaint } from "../hooks";
import useRotate from "../hooks/useRotate";

function Bed({ showroomType, position: pos, ...props }) {
  const { nodes, materials } = useGLTF("/Bed.glb");
  const [position, setPosition] = useState(pos || [0, 0, 0]);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [ref, api] = useBox(() => ({
    dispose: null,
    type: "Static",
    mass: 5,
    args: [3, 0, 6],
    position,
    rotation,
    ...props,
  }));

  const bindDrag = useDrag(api, position, setPosition);
  const bindRotate = useRotate(api, rotation, setRotation);
  const bindPaint = usePaint(2);

  const items = useAtomValue(colorItemsAtom);

  return (
    <group
      ref={ref}
      scale={3}
      dispose={null}
      {...(showroomType === "room" && bindPaint())}
      {...(showroomType === "room" && bindRotate())}
      {...(showroomType === "room" && bindDrag())}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bed_Frame.geometry}
        material={materials["Bed Frame"]}
        material-color={items[2]["Bed Frame"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bed_Pillow.geometry}
        material={materials["Bed Pillow"]}
        material-color={items[2]["Bed Pillow"]}
        position={[0, 0.65, -0.8]}
        rotation={[0.64, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bed_Mattress.geometry}
        material={materials["Bed Mattress"]}
        material-color={items[2]["Bed Mattress"]}
        position={[0, 0.05, 0]}
      />
    </group>
  );
}

export default Bed;
