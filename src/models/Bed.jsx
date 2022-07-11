/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

function Bed({ ...props }) {
  const { nodes, materials } = useGLTF("/Another_bedroom.gltf");

  const [ref] = useBox(() => ({
    dispose: null,
    type: "Static",
    mass: 5,
    ...props,
  }));

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bed_frame.geometry}
        material={materials.Frame}
        position={[-2.66, 0.2, 2.21]}
      />
      <group position={[-2.66, 0.87, 2.21]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_2.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_2_1.geometry}
          material={materials.Pillow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_2_2.geometry}
          material={materials.Blanket}
        />
      </group>
      <group position={[-2.66, 1.34, 3.6]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_3.geometry}
          material={materials.Blanket}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_3_1.geometry}
          material={materials.Pillow}
        />
      </group>
    </group>
  );
}

export default Bed;
