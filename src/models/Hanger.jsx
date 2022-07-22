import { useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { useAtomValue } from "jotai";
import React, { useState } from "react";

import { colorItemsAtom } from "../atoms";
import { useDrag, usePaint } from "../hooks";
import useRotate from "../hooks/useRotate";

function Hanger({ showroomType, position: pos, ...props }) {
  const { nodes, materials } = useGLTF("/Hanger.glb");
  const [position, setPosition] = useState(pos || [0, 6, 0]);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [ref, api] = useBox(() => ({
    dispose: null,
    type: "Static",
    mass: 10,
    args: [1.4, 0, 2.5],
    position,
    rotation,
    ...props,
  }));

  const bindDrag = useDrag(api, position, setPosition);
  const bindRotate = useRotate(api, rotation, setRotation);
  const bindPaint = usePaint(9);

  const items = useAtomValue(colorItemsAtom);

  return (
    <group
      ref={ref}
      scale={0.23}
      dispose={null}
      {...(showroomType === "room" && bindPaint())}
      {...(showroomType === "room" && bindRotate())}
      {...(showroomType === "room" && bindDrag())}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hanger_1.geometry}
        material={materials.Hanger}
        material-color={items[9].Hanger}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hanger_2.geometry}
        material={materials.Hanger}
        material-color={items[9].Hanger}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hanger_3.geometry}
        material={materials.Hanger}
        material-color={items[9].Hanger}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hanger_4.geometry}
        material={materials.Hanger}
        material-color={items[9].Hanger}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hanger_5.geometry}
        material={materials.Hanger}
        material-color={items[9].Hanger}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nova_2_main_part.geometry}
        material={materials["Nova 2"]}
        material-color={items[9]["Nova 2"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nova_2_shelf.geometry}
        material={materials["Nova 2"]}
        material-color={items[9]["Nova 2"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

export default Hanger;
