import { usePlane } from "@react-three/cannon";
import React from "react";
import { DoubleSide } from "three";

function RoomPlane({ ...props }) {
  const [ref] = usePlane(() => ({
    type: "Static",
    material: "ground",
    ...props,
  }));

  return (
    <group ref={ref} {...props}>
      <mesh>
        <planeGeometry args={[16, 16]} />
        <meshStandardMaterial color="yellow" side={DoubleSide} />
      </mesh>
    </group>
  );
}

export default RoomPlane;
