import { Debug, useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { Select } from "@react-three/postprocessing";
import { useAtomValue } from "jotai";
import React, { useState } from "react";

import { colorItemsAtom } from "../atoms";
import { useDrag, useHover, usePaint } from "../hooks";
import useRotate from "../hooks/useRotate";

function Desk({ showroomType, position: pos, ...props }) {
  const { nodes, materials } = useGLTF("/Desk.glb");
  const [position, setPosition] = useState(pos || [0, 0, 0]);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [ref, api] = useBox(() => ({
    type: "Static",
    dispose: null,
    mass: 10,
    args: [1.8, 0.1, 3.5],
    position,
    rotation,
    ...props,
  }));

  const bindDrag = useDrag(api, position, setPosition);
  const bindRotate = useRotate(api, rotation, setRotation);
  const bindPaint = usePaint(3);
  const [hovered, bindHover] = useHover();

  const items = useAtomValue(colorItemsAtom);

  return (
    <Select enabled={hovered}>
      <Debug color="black">
        <group
          ref={ref}
          scale={1.5}
          dispose={null}
          // rotation={rotation}
          {...(showroomType === "room" && bindHover())}
          {...(showroomType === "room" && bindDrag())}
          {...(showroomType === "room" && bindRotate())}
          {...(showroomType === "room" && bindPaint())}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials.Material}
            material-color={items[3].Material}
            position={[-0.07, 0.94, 0.63]}
            scale={[0.51, 0.42, 0.53]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.desk_collider.geometry}
            material={materials.Material}
            material-color={items[3].Material}
            position={[-0.07, 0.94, 0.63]}
            scale={[0.51, 0.42, 0.53]}
          />
        </group>
      </Debug>
    </Select>
  );
}

export default Desk;
