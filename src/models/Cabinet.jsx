import { Debug, useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { Select } from "@react-three/postprocessing";
import { useAtomValue } from "jotai";
import React, { useState } from "react";

import { colorItemsAtom } from "../atoms";
import { useDrag, useHover, usePaint, useRotate } from "../hooks";

function Cabinet({ showroomType, position: pos, ...props }) {
  const { nodes, materials } = useGLTF("/Cabinet.glb");
  const [position, setPosition] = useState(pos || [0, 0, 0]);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [ref, api] = useBox(() => ({
    dispose: null,
    type: "Static",
    mass: 10,
    args: [1.7, 0.65, 1.9],
    position,
    rotation,
    ...props,
  }));

  const bindDrag = useDrag(api, position, setPosition);
  const bindRotate = useRotate(api, rotation, setRotation);
  const bindPaint = usePaint(10);
  const [hovered, bindHover] = useHover();

  const items = useAtomValue(colorItemsAtom);

  return (
    <Select enabled={hovered}>
      <Debug color="black">
        <group
          ref={ref}
          scale={[0.8, 0.3, 0.8]}
          dispose={null}
          {...(showroomType === "room" && bindHover())}
          {...(showroomType === "room" && bindPaint())}
          {...(showroomType === "room" && bindRotate())}
          {...(showroomType === "room" && bindDrag())}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials.Madera}
            material-color={items[10].Madera}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials["Lamina Blanca"]}
            material-color={items[10]["Lamina Blanca"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_2.geometry}
            material={materials.Metalizado}
            material-color={items[10].Metalizado}
          />
        </group>
      </Debug>
    </Select>
  );
}
useGLTF.preload("/Cabinet.glb");

export default Cabinet;
