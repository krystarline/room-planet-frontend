/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

function Chair({ type, ...props }) {
  const { nodes, materials } = useGLTF("/Ottoman.gltf");

  const [group] = useBox(() => ({
    type,
    mass: 5,
    ...props,
  }));

  return (
    <group ref={group} dispose={null} scale={0.3} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ottoman_legs.geometry}
        material={materials["Ottoman wood"]}
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
