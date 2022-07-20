/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Debug, useBox } from "@react-three/cannon";
import { Select } from "@react-three/postprocessing";
import { useAtomValue } from "jotai";

import { useHover, useDrag, usePaint } from "../hooks";
import { colorItemsAtom } from "../atoms";
import useRotate from "../hooks/useRotate";

function Table({ showroomType, position: pos, ...props }) {
  const { nodes, materials } = useGLTF("/Table.gltf");
  const [position, setPosition] = useState(pos || [0, 6, 0]);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [ref, api] = useBox(() => ({
    dispose: null,
    type: "Static",
    mass: 10,
    position,
    rotation,
    args: [1.5, 1.5, 1.5],
    ...props,
  }));

  const bindDrag = useDrag(api, position, setPosition);
  const bindRotate = useRotate(api, rotation, setRotation);
  const bindPaint = usePaint(1);
  const [hovered, bindHover] = useHover();

  const items = useAtomValue(colorItemsAtom);

  return (
    <Select enabled={hovered}>
      <Debug color="black">
        <group
          ref={ref}
          dispose={null}
          scale={0.2}
          {...(showroomType === "room" && bindHover())}
          {...(showroomType === "room" && bindPaint())}
          {...(showroomType === "room" && bindRotate())}
          {...(showroomType === "room" && bindDrag())}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Table_legs001.geometry}
            material={materials["Table black"]}
            material-color={items[1]["Table black"]}
            position={[0, -3.71, 0]}
            rotation={[0, Math.PI / 3, 0]}
            scale={0.05}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Table_main.geometry}
            material={materials["Table black"]}
            material-color={items[1]["Table black"]}
            position={[0, -3.69, 0]}
            scale={2.75}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Table_top_ring.geometry}
            material={materials["Table black"]}
            material-color={items[1]["Table black"]}
            position={[0, 5.77, 0]}
            scale={[4.5, 5.51, 4.5]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Table_top001.geometry}
            material={materials["Table top"]}
            material-color={items[1]["Table top"]}
            position={[0, 5.77, 0]}
            scale={[4.5, 5.51, 4.5]}
          />
        </group>
      </Debug>
    </Select>
  );
}

export default Table;
