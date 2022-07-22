import { Debug, useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { Select } from "@react-three/postprocessing";
import { useAtomValue } from "jotai";
import React, { useState } from "react";

import { colorItemsAtom } from "../atoms";
import { useDrag, useHover, usePaint } from "../hooks";
import useRotate from "../hooks/useRotate";

function Chair({ showroomType, position: pos, ...props }) {
  const { nodes, materials } = useGLTF("/Ottoman-v1.glb");
  const [position, setPosition] = useState(pos || [0, 6, 0]);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [ref, api] = useBox(() => ({
    dispose: null,
    type: "Static",
    mass: 10,
    args: [1.5, 0.75, 1.5],
    position,
    rotation,
    ...props,
  }));

  const bindDrag = useDrag(api, position, setPosition);
  const bindRotate = useRotate(api, rotation, setRotation);
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
          {...(showroomType === "room" && bindHover())}
          {...(showroomType === "room" && bindPaint())}
          {...(showroomType === "room" && bindRotate())}
          {...(showroomType === "room" && bindDrag())}
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

useGLTF.preload("/Ottoman-v1.glb");

export default Chair;
