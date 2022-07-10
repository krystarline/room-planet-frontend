/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function Bedroom({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Another_bedroom.gltf");

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.White}
        scale={[4, 0.2, 4]}
      />
      {/* <mesh
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
      <group position={[-0.01, 0.2, 3.49]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_4.geometry}
          material={materials.Frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_4_1.geometry}
          material={materials.Blanket}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_4_2.geometry}
          material={materials["Pin picture.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pillow001.geometry}
        material={materials.Pillow}
        position={[0.15, 1.24, 3.65]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pillow002.geometry}
        material={materials.Pillow}
        position={[0.59, 1.29, 3.77]}
        rotation={[-1.18, 0.14, 0.13]}
      />
      <group position={[2.63, 0.2, 3.66]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_7.geometry}
          material={materials.Frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_7_1.geometry}
          material={materials["Pin picture.001"]}
        />
      </group>
      <group position={[-3.23, 0.2, -1.54]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_8.geometry}
          material={materials.Frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_8_1.geometry}
          material={materials["Pin picture.001"]}
        />
      </group>
      <group position={[3.38, 1.88, 3.67]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_9.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_9_1.geometry}
          material={materials.Red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_9_2.geometry}
          material={materials.Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_9_3.geometry}
          material={materials.Yellow}
        />
      </group>
      <group position={[2.59, 2.61, 3.68]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_10.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_10_1.geometry}
          material={materials.Yellow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_10_2.geometry}
          material={materials.Red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_10_3.geometry}
          material={materials.Blue}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Coffe_table.geometry}
        material={materials.Frame}
        position={[1.2, 0.55, -0.88]}
      />
      <group position={[1.19, 0.21, -0.87]} rotation={[0, 0.45, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_12.geometry}
          material={materials.Pillow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_12_1.geometry}
          material={materials.White}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cushion.geometry}
        material={materials.Blanket}
        position={[2.77, 0.28, -0.85]}
        rotation={[0, 0.35, 0]}
      />
      <group position={[3.39, 1.27, 3.67]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_14.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_14_1.geometry}
          material={materials.Red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_14_2.geometry}
          material={materials.Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_14_3.geometry}
          material={materials.Yellow}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cushion001.geometry}
        material={materials.Blanket}
        position={[1.42, 0.28, -2.39]}
        rotation={[-Math.PI, 1.4, -Math.PI]}
      />
      <group position={[-3.57, 0.17, -3.31]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_16.geometry}
          material={materials.Blanket}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_16_1.geometry}
          material={materials.Pillow}
        />
      </group>
      <group position={[2.5, 1.88, 3.67]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_17.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_17_1.geometry}
          material={materials.Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_17_2.geometry}
          material={materials.Red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_17_3.geometry}
          material={materials.Yellow}
        />
      </group>
      <group position={[-1.74, 1.06, -1.25]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_18.geometry}
          material={materials.Blanket}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_18_1.geometry}
          material={materials.Frame}
        />
      </group>
      <group position={[1.69, 0.67, -0.8]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_19.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_19_1.geometry}
          material={materials.Coffe}
        />
      </group>
      <group position={[1.31, 0.68, -1.45]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_20.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_20_1.geometry}
          material={materials.Coffe}
        />
      </group>
      <group position={[2.57, 1.49, 3.65]} rotation={[0, 0.32, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_21.geometry}
          material={materials.Frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_21_1.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_21_2.geometry}
          material={materials["Pin picture.002"]}
        />
      </group>
      <group position={[1.91, 1.49, 3.65]} rotation={[0, -0.35, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_22.geometry}
          material={materials.Frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_22_1.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_22_2.geometry}
          material={materials["Pin picture"]}
        />
      </group>
      <group position={[-3.65, 1.44, -1.06]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_23.geometry}
          material={materials.Pillow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_23_1.geometry}
          material={materials["Pin picture.001"]}
        />
      </group>
      <group position={[-2.95, 1.44, -1.11]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_24.geometry}
          material={materials.Pillow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_24_1.geometry}
          material={materials["Pin picture.001"]}
        />
      </group>
      <group position={[-3.66, 1.44, -2.44]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_25.geometry}
          material={materials.Coffe}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_25_1.geometry}
          material={materials.Blanket}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_25_2.geometry}
          material={materials.Leaves}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_25_3.geometry}
          material={materials.Frame}
        />
      </group> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall.geometry}
        material={materials.White}
      />
      <group position={[-4, 3.05, -1.32]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_28.geometry}
          material={materials.White}
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
        position={[-3.77, 3.25, 2.27]}
      />
      <group position={[-3.72, 3.19, 2.87]}>
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
      <group position={[-3.74, 2.79, 1.66]}>
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
      <group position={[0.04, 2.93, 4.28]}>
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
      </group>
    </group>
  );
}

export default Bedroom;
// useGLTF.preload("/Another_bedroom.gltf");
