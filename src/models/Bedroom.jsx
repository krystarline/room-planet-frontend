/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function Bedroom({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Another_bedroom.gltf");

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Floor.geometry}
        material={materials.Yellow}
        scale={[8, 0.4, 8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall.geometry}
        material={materials.Yellow}
        scale={[2, 1.5, 2]}
      />
      <group position={[-7.95, 4.2, -2.32]} scale={2}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_28.geometry}
          material={materials.Yellow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_28_1.geometry}
          material={materials["Pin picture"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_28_2.geometry}
          material={materials.Frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_28_3.geometry}
          material={materials.Board}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_28_4.geometry}
          material={materials.Red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_28_5.geometry}
          material={materials["Pin picture.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_28_6.geometry}
          material={materials.Yellow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_28_7.geometry}
          material={materials["Pin picture.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_28_8.geometry}
          material={materials.Blue}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wallshelf.geometry}
        material={materials.Frame}
        scale={1.5}
        position={[-8, 5, 2.27]}
      />
      <group position={[-8, 4.9, 3.33]} scale={1.3}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_30.geometry}
          material={materials.Red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_30_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group position={[-8, 4.3, 1.33]} scale={1.3}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_31.geometry}
          material={materials.Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_31_1.geometry}
          material={materials.Leaves}
        />
      </group>
      {/* <group position={[0.04, 4.3, 8]} scale={2}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_27.geometry}
          material={materials.Frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_27_1.geometry}
          material={materials.Material}
        />
      </group> */}
    </group>
  );
}

export default Bedroom;
// useGLTF.preload("/Another_bedroom.gltf");
