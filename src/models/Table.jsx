import { useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { useAtomValue } from "jotai";
import React, { useState } from "react";

import { colorItemsAtom } from "../atoms";
import { useDrag, usePaint } from "../hooks";
import useRotate from "../hooks/useRotate";

function Table({ showroomType, position: pos, ...props }) {
  const { nodes, materials } = useGLTF("/Table.glb");
  const [position, setPosition] = useState(pos || [0, 6, 0]);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [ref, api] = useBox(() => ({
    dispose: null,
    type: "Static",
    mass: 10,
    args: [1, 0, 1],
    position,
    rotation,
    ...props,
  }));

  const bindDrag = useDrag(api, position, setPosition);
  const bindRotate = useRotate(api, rotation, setRotation);
  const bindPaint = usePaint(1);

  const items = useAtomValue(colorItemsAtom);

  return (
    <group
      ref={ref}
      scale={1.2}
      dispose={null}
      {...(showroomType === "room" && bindPaint())}
      {...(showroomType === "room" && bindRotate())}
      {...(showroomType === "room" && bindDrag())}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table.geometry}
        material={materials.Table}
        material-color={items[1].Table}
        position={[0, 0.8, 0]}
        scale={0.41}
      />
    </group>
  );
}

export default Table;
