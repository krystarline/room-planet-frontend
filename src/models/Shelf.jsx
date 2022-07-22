import { Debug, useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { Select } from "@react-three/postprocessing";
import { useAtomValue } from "jotai";
import React, { useState } from "react";

import { colorItemsAtom } from "../atoms";
import { useDrag, useHover, usePaint } from "../hooks";
import useRotate from "../hooks/useRotate";

function Shelf({ showroomType, position: pos, ...props }) {
  const { nodes, materials } = useGLTF("/Shelf.gltf");
  const [position, setPosition] = useState(pos || [0, 0, 0]);
  const [rotation, setRotation] = useState([0, Math.PI, 0]);
  const [ref, api] = useBox(() => ({
    type: "Static",
    dispose: null,
    mass: 10,
    args: [3.9, 0, 1.2],
    position,
    rotation,
    ...props,
  }));

  const bindDrag = useDrag(api, position, setPosition);
  const bindRotate = useRotate(api, rotation, setRotation);
  const bindPaint = usePaint(8);
  const [hovered, bindHover] = useHover();

  const items = useAtomValue(colorItemsAtom);

  return (
    <Select enabled={hovered}>
      <Debug color="black">
        <group
          ref={ref}
          scale={1.5}
          dispose={null}
          {...(showroomType === "room" && bindHover())}
          {...(showroomType === "room" && bindDrag())}
          {...(showroomType === "room" && bindRotate())}
          {...(showroomType === "room" && bindPaint())}
        >
          {/* <group position={[2.63, 0.2, 3.66]}> */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_7.geometry}
            material={materials.Frame}
            material-color={items[8].Frame}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_7_1.geometry}
            material={materials["Pin picture.001"]}
            material-color={items[8]["Pin picture.001"]}
          />
        </group>
        {/* </group> */}
      </Debug>
    </Select>
  );
}

export default Shelf;
