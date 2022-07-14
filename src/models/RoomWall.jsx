import React from "react";
import { DoubleSide } from "three";
import { usePlane } from "@react-three/cannon";

function RoomWall(props) {
  const [ref] = usePlane(() => ({
    type: "Static",
    material: "ground",
    ...props,
  }));

  return (
    <group ref={ref}>
      <mesh>
        <planeGeometry args={[16, 8]} />
        <meshStandardMaterial color="orange" side={DoubleSide} />
      </mesh>
    </group>
  );
}

// transparent="true" opacity="0"

export default RoomWall;
