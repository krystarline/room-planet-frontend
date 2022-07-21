/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Debug, useBox } from "@react-three/cannon";
import { Select } from "@react-three/postprocessing";
import { useAtomValue } from "jotai";

import { useHover, useDrag, usePaint } from "../hooks";
import { colorItemsAtom } from "../atoms";
import useRotate from "../hooks/useRotate";

function LeatherChair({ showroomType, position: pos, ...props }) {
  const { nodes, materials } = useGLTF("/black_leather_chair.gltf");
  const [position, setPosition] = useState(pos || [0, 0, 0]);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [ref, api] = useBox(() => ({
    dispose: null,
    type: "Static",
    mass: 10,
    args: [1.4, 0.01, 1.4],
    position,
    rotation,
    ...props,
  }));

  const bindDrag = useDrag(api, position, setPosition);
  const bindRotate = useRotate(api, rotation, setRotation);
  const bindPaint = usePaint(5);
  const [hovered, bindHover] = useHover();

  const items = useAtomValue(colorItemsAtom);

  return (
    <Select enabled={hovered}>
      <Debug color="black">
        <group
          ref={ref}
          scale={2}
          dispose={null}
          {...(showroomType === "room" && bindHover())}
          {...(showroomType === "room" && bindPaint())}
          {...(showroomType === "room" && bindRotate())}
          {...(showroomType === "room" && bindDrag())}
        >
          <mesh
            // castShadow
            // receiveShadow
            geometry={nodes.koltuk.geometry}
            material={materials.chair}
            material-color={items[5].chair}
            rotation={[0, -0.5, 0]}
          />
        </group>
      </Debug>
    </Select>
  );
}

export default LeatherChair;
