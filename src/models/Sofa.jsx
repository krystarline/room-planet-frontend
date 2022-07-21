/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Debug, useBox } from "@react-three/cannon";
import { Select } from "@react-three/postprocessing";
import { useAtomValue } from "jotai";

import { useDrag, usePaint, useHover } from "../hooks";
import { colorItemsAtom } from "../atoms";
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
  const [hovered, bindHover] = useHover();

  const items = useAtomValue(colorItemsAtom);

  return (
    <Select enabled={hovered}>
      <Debug color="black">
        <group
          ref={ref}
          scale={1.4}
          dispose={null}
          {...(showroomType === "room" && bindHover())}
          {...(showroomType === "room" && bindDrag())}
          {...(showroomType === "room" && bindRotate())}
          {...(showroomType === "room" && bindPaint())}
        >
          {/* <group position={[0, 0, 0]} scale={0.7}> */}
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
          {/* </group> */}
        </group>
      </Debug>
    </Select>
  );
}

export default Sofa;
