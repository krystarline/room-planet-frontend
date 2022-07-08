import React from "react";
import { useBox } from "@react-three/cannon";

function Box({ ...props }) {
  const [box] = useBox(() => ({
    type: "Dynamic",
    mass: 8,
    ...props,
  }));

  return (
    <mesh castShadow ref={box}>
      <boxGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="beige" />
    </mesh>
  );
}

export default Box;
