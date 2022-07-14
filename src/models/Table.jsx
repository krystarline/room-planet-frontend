/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Debug, useBox } from "@react-three/cannon";
import { Select } from "@react-three/postprocessing";
import { useDrag } from "@use-gesture/react";

import { useAtomValue, useAtom } from "jotai";

import { useHover } from "../hooks";
import { toolAtom, colorAtom } from "../common/atom";

function Table({ initPos, boxProps, groupProps }) {
  const { size, viewport } = useThree();
  const { nodes, materials } = useGLTF("/Table.gltf");
  const [position, setPosition] = useState(initPos || [0, 6, 0]);
  const [ref, api] = useBox(() => ({
    dispose: null,
    type: "Static",
    mass: 5,
    position,
    args: [1.5, 1.5, 1.5],
    ...boxProps,
  }));

  const { type: toolType } = useAtomValue(toolAtom);
  const [{ items }, setColor] = useAtom(colorAtom);

  const [hovered, bindHover] = useHover();

  const isDraggerActivated = () => toolType === "dragger";
  const isPainterActivated = () => toolType === "painter";

  const bindDrag = useDrag(({ offset: [,], movement: [x, z] }) => {
    const [, y] = position;
    const aspect = size.width / viewport.width;

    api.position.set(x / aspect, y, z / aspect);
  });
  const bindPaint = () => ({
    onPointerUp: (e) => {
      e.stopPropagation();
      setColor((prev) => ({
        ...prev,
        current: { index: 1, name: e.object.material.name },
      }));
    },
  });

  useEffect(() => {
    const unsub = api.position.subscribe((p) => {
      setPosition(p);
    });

    return unsub;
  }, [api]);

  return (
    <Select enabled={hovered}>
      <Debug color="black">
        <group
          ref={ref}
          dispose={null}
          scale={0.2}
          {...bindHover()}
          {...(isPainterActivated() && bindPaint())}
          {...(isDraggerActivated() && bindDrag())}
          {...groupProps}
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
