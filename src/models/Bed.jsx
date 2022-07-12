/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { Select } from "@react-three/postprocessing";
import { useAtom } from "jotai";

import { colorAtom } from "../common/atom";

function Bed({ boxProps, groupProps }) {
  const { nodes, materials } = useGLTF("/Another_bedroom.gltf");
  const [{ items }, setColor] = useAtom(colorAtom);
  const [hovered, setHover] = useState(false);

  const [ref] = useBox(() => ({
    dispose: null,
    type: "Static",
    mass: 5,
    ...boxProps,
  }));

  const handlePointerDown = (e) => {
    e.stopPropagation();
    setColor((prev) => ({
      ...prev,
      current: { index: 1, name: e.object.material.name },
    }));
  };

  return (
    <Select enabled={hovered}>
      <group
        ref={ref}
        dispose={null}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onPointerUp={handlePointerDown}
        {...groupProps}
        position={[0, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bed_frame.geometry}
          material={materials.Frame}
          material-color={items[1].Frame}
          position={[-2.66, 0.2, 2.21]}
        />
        <group position={[-2.66, 0.87, 2.21]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_2.geometry}
            material={materials.White}
            material-color={items[1].White}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_2_1.geometry}
            material={materials.Pillow}
            material-color={items[1].Pillow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_2_2.geometry}
            material={materials.Blanket}
            material-color={items[1].Blanket}
          />
        </group>
        <group position={[-2.66, 1.34, 3.6]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_3.geometry}
            material={materials.Blanket}
            material-color={items[1].Blanket}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_3_1.geometry}
            material={materials.Pillow}
            material-color={items[1].Pillow}
          />
        </group>
      </group>
    </Select>
  );
}

export default Bed;
