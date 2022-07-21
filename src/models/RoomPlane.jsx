/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { DoubleSide } from "three";
import { usePlane } from "@react-three/cannon";

function RoomPlane({ ...props }) {
  const [ref] = usePlane(() => ({
    type: "Static",
    material: "ground",
    ...props,
  }));

  return (
    // 20, 20, transparent="true" opacity="1"
    <group ref={ref} {...props}>
      <mesh>
        <planeGeometry args={[16, 16]} />
        <meshStandardMaterial color="yellow" side={DoubleSide} />
      </mesh>
    </group>
  );
}

export default RoomPlane;
