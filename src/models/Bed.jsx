/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Debug, useBox } from "@react-three/cannon";
import { Select } from "@react-three/postprocessing";
import { useAtomValue } from "jotai";

import { useHover, useDrag, usePaint } from "../hooks";
import { colorItemsAtom } from "../atoms";

function Bed({ showroomType, position: pos, ...props }) {
  const { nodes, materials } = useGLTF("/Bed.glb");
  const [position, setPosition] = useState(pos || [0, 0, 0]);
  const [ref, api] = useBox(() => ({
    dispose: null,
    type: "Static",
    mass: 5,
    args: [3, 0, 6],
    position,
    ...props,
  }));

  const bindDrag = useDrag(api, position, setPosition);
  const bindPaint = usePaint(3);
  const [hovered, bindHover] = useHover();

  const items = useAtomValue(colorItemsAtom);

  return (
    <Select enabled={hovered}>
      <Debug color="black">
        <group
          ref={ref}
          scale={3}
          dispose={null}
          {...(showroomType === "room" && bindHover())}
          {...(showroomType === "room" && bindPaint())}
          {...(showroomType === "room" && bindDrag())}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bed_Frame.geometry}
            material={materials["Bed Frame"]}
            material-color={items[3]["Bed Frame"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bed_Pillow.geometry}
            material={materials["Bed Pillow"]}
            material-color={items[3]["Bed Pillow"]}
            position={[0, 0.65, -0.8]}
            rotation={[0.64, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bed_Mattress.geometry}
            material={materials["Bed Mattress"]}
            material-color={items[3]["Bed Mattress"]}
            position={[0, 0.05, 0]}
          />
        </group>
      </Debug>
    </Select>
  );
}

export default Bed;
