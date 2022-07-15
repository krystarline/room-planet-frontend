/* eslint-disable no-return-assign */
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

function Chair({ position: pos, ...props }) {
  const { nodes, materials } = useGLTF("/Ottoman.gltf");
  const [position, setPosition] = useState(pos || [0, 6, 0]);
  const [ref, api] = useBox(() => ({
    dispose: null,
    type: "Static",
    mass: 10,
    args: [1.5, 0.75, 1.5],
    position,
    ...props,
  }));

  const bindDrag = useDrag(api, position, setPosition);
  const bindPaint = usePaint(0);
  const [hovered, bindHover] = useHover();

  const items = useAtomValue(colorItemsAtom);

  return (
    <Select enabled={hovered}>
      <Debug color="black">
        <group
          ref={ref}
          scale={0.3}
          dispose={null}
          {...bindHover()}
          {...bindPaint()}
          {...bindDrag()}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ottoman_legs.geometry}
            material={materials["Ottoman wood"]}
            material-color={items[0]["Ottoman wood"]}
            scale={15.62}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ottoman_seams.geometry}
            material={materials["Ottoman fabric"]}
            material-color={items[0]["Ottoman fabric"]}
            rotation={[0, Math.PI / 4, 0]}
            scale={16.9}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ottoman_seat.geometry}
            material={materials["Ottoman fabric"]}
            material-color={items[0]["Ottoman fabric"]}
            scale={16.9}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ottoman_seat_cushion.geometry}
            material={materials["Ottoman fabric"]}
            material-color={items[0]["Ottoman fabric"]}
            scale={[2.52, 2.43, 2.52]}
          />
        </group>
      </Debug>
    </Select>
  );
}

export default Chair;
