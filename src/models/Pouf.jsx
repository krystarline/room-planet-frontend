import { useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { useAtomValue } from "jotai";
import React, { useState } from "react";

import { colorItemsAtom } from "../atoms";
import { useDrag, usePaint } from "../hooks";
import useRotate from "../hooks/useRotate";

function Pouf({ showroomType, position: pos, ...props }) {
  const { nodes, materials } = useGLTF("/Pouf.glb");
  const [position, setPosition] = useState(pos || [0, 0, 0]);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [ref, api] = useBox(() => ({
    dispose: null,
    type: "Static",
    mass: 10,
    args: [0.8, 0.52, 1.4],
    position,
    rotation,
    ...props,
  }));

  const bindDrag = useDrag(api, position, setPosition);
  const bindRotate = useRotate(api, rotation, setRotation);
  const bindPaint = usePaint(4);

  const items = useAtomValue(colorItemsAtom);

  return (
    <group
      ref={ref}
      dispose={null}
      {...(showroomType === "room" && bindPaint())}
      {...(showroomType === "room" && bindRotate())}
      {...(showroomType === "room" && bindDrag())}
    >
      <group
        scale={0.1}
        position={[0, 0.34, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pouf_bottom.geometry}
          material={materials["Pouf fabric"]}
          material-color={items[4]["Pouf fabric"]}
          position={[0, -4.78, 0.01]}
          scale={5.77}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pouf_seat.geometry}
          material={materials["Pouf fabric"]}
          material-color={items[4]["Pouf fabric"]}
          position={[0, -2.49, 0]}
          scale={[6.46, 6.46, 3.88]}
        />
      </group>
    </group>
  );
}

export default Pouf;
