import { useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { useAtomValue } from "jotai";
import React, { useState } from "react";

import { colorItemsAtom } from "../atoms";
import { useDrag, usePaint } from "../hooks";
import useRotate from "../hooks/useRotate";

function ArmChair({ showroomType, position: pos, ...props }) {
  const { nodes, materials } = useGLTF("/ArmChair.glb");
  const [position, setPosition] = useState(pos || [0, 6, 0]);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [ref, api] = useBox(() => ({
    dispose: null,
    type: "Static",
    mass: 10,
    args: [2.1, 2, 1.6],
    position,
    rotation,
    ...props,
  }));

  const bindDrag = useDrag(api, position, setPosition);
  const bindRotate = useRotate(api, rotation, setRotation);
  const bindPaint = usePaint(7);

  const items = useAtomValue(colorItemsAtom);

  return (
    <group
      ref={ref}
      scale={0.18}
      dispose={null}
      {...(showroomType === "room" && bindPaint())}
      {...(showroomType === "room" && bindRotate())}
      {...(showroomType === "room" && bindDrag())}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Legs002.geometry}
        material={materials["Armchair wood"]}
        material-color={items[7]["Armchair wood"]}
        position={[0, -3.42, -0.22]}
        rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
        scale={5.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Seat_1.geometry}
        material={materials["Armchair wood"]}
        material-color={items[7]["Armchair wood"]}
        position={[0, -2.45, 0.18]}
        scale={4.28}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Seat_1003.geometry}
        material={materials.Cushion}
        material-color={items[7].Cushion}
        position={[0, 0, -1.67]}
        scale={4.36}
      />
    </group>
  );
}

export default ArmChair;
