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

function Armchair({ showroomType, position: pos, ...props }) {
  const { nodes, materials } = useGLTF("/Armchair.glb");
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
  const [hovered, bindHover] = useHover();

  const items = useAtomValue(colorItemsAtom);

  return (
    <Select enabled={hovered}>
      <Debug color="black">
        <group
          ref={ref}
          scale={0.18}
          dispose={null}
          {...(showroomType === "room" && bindHover())}
          {...(showroomType === "room" && bindPaint())}
          {...(showroomType === "room" && bindRotate())}
          {...(showroomType === "room" && bindDrag())}
        >
          {/* <group position={[0, 0.44, 0]} scale={0.06}> */}
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
          {/* </group> */}
        </group>
      </Debug>
    </Select>
  );
}

export default Armchair;
