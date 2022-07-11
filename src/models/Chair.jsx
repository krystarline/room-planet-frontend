/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { store, colorAtom } from "../common/atom";

function Chair({ type, onPointerDown, onPointerMissed, ...props }) {
  const { nodes, materials } = useGLTF("/Ottoman.gltf");
  const [color, setColor] = useState(store.get(colorAtom));

  useEffect(() => {
    const unsub = store.sub(colorAtom, () => {
      const newColor = store.get(colorAtom);
      setColor(newColor);
    });

    return () => unsub();
  }, []);

  const [ref] = useBox(() => ({
    dispose: null,
    type,
    mass: 5,
    ...props,
  }));

  return (
    <group
      ref={ref}
      scale={0.2}
      onPointerDown={onPointerDown}
      onPointerMissed={onPointerMissed}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ottoman_legs.geometry}
        material={materials["Ottoman wood"]}
        material-color={color.items[0]["Ottoman wood"]}
        scale={15.62}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ottoman_seams.geometry}
        material={materials["Ottoman fabric"]}
        rotation={[0, Math.PI / 4, 0]}
        scale={16.9}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ottoman_seat.geometry}
        material={materials["Ottoman fabric"]}
        scale={16.9}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ottoman_seat_cushion.geometry}
        material={materials["Ottoman fabric"]}
        scale={[2.52, 2.43, 2.52]}
      />
    </group>
  );
}

export default Chair;
