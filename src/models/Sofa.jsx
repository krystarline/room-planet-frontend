import { useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { useAtomValue } from "jotai";
import React, { useState } from "react";

import { colorItemsAtom } from "../atoms";
import { useDrag, usePaint } from "../hooks";
import useRotate from "../hooks/useRotate";

function Sofa({ showroomType, position: pos, ...props }) {
  const { nodes, materials } = useGLTF("/Sofa.gltf");
  const [position, setPosition] = useState(pos || [0, 0, 0]);
  const [rotation, setRotation] = useState([0, Math.PI, 0]);
  const [ref, api] = useBox(() => ({
    type: "Static",
    dispose: null,
    mass: 10,
    args: [4, 0, 1.5],
    position,
    rotation,
    ...props,
  }));

  const bindDrag = useDrag(api, position, setPosition);
  const bindRotate = useRotate(api, rotation, setRotation);
  const bindPaint = usePaint(6);

  const items = useAtomValue(colorItemsAtom);

  return (
    <group
      ref={ref}
      scale={1.4}
      dispose={null}
      {...(showroomType === "room" && bindDrag())}
      {...(showroomType === "room" && bindRotate())}
      {...(showroomType === "room" && bindPaint())}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_4.geometry}
        material={materials.Frame}
        material-color={items[6].Frame}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_4_1.geometry}
        material={materials.Blanket}
        material-color={items[6].Blanket}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_4_2.geometry}
        material={materials["Pin picture.001"]}
        material-color={items[6]["Pin picture.001"]}
      />
    </group>
  );
}

export default Sofa;
