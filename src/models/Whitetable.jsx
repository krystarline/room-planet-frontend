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

function Whitetable({ showroomType, position: pos, ...props }) {
  const { nodes, materials } = useGLTF("/Whitetable.glb");
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
  const [hovered, bindHover] = useHover();

  const items = useAtomValue(colorItemsAtom);

  return (
    <Select enabled={hovered}>
      <Debug color="black">
        <group
          ref={ref}
          scale={1.2}
          dispose={null}
          {...(showroomType === "room" && bindHover())}
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
      </Debug>
    </Select>
  );
}

export default Whitetable;
