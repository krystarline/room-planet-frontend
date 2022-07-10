/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { useGLTF } from "@react-three/drei";

import { modelsAtom } from "../common/atom";

function Model({ file, ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("Modern_TV_Rack-01.gltf");
  const [, setModels] = useAtom(modelsAtom);
  // const { nodes } = useGLTF(file);

  const [hover, setHover] = useState(false);
  // const [active, setActive] = useState(false);
  useEffect(() => {
    document.body.style.cursor = hover ? "pointer" : "default";
  }, [hover]);

  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime();
  //   group.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
  //   group.current.rotation.x = Math.cos(t / 4) / 8;
  //   group.current.rotation.y = Math.sin(t / 4) / 8;
  //   group.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  // });

  const handleOnDoubleClick = () => {
    setModels((prev) => [...prev, "modernTvRack"]);
  };

  return (
    <group
      ref={group}
      dispose={null}
      onPointerOver={() => setHover(!hover)}
      onPointerOut={() => setHover(hover)}
      onDoubleClick={handleOnDoubleClick}
      {...props}
      // scale={active ? 1.5 : 1}
      // onDoubleClick={() => setActive(!active)}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Flooring_Cube053.geometry}
        material={nodes.Flooring_Cube053.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_Front_Cube056.geometry}
        material={nodes.Wall_Front_Cube056.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_Right_Cube040.geometry}
        material={nodes.Wall_Right_Cube040.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_Cube048.geometry}
        material={nodes.Window_Cube048.material}
      />
    </group>
  );
}

export default Model;
