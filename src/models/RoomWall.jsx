import { usePlane } from "@react-three/cannon";
import React from "react";
import { DoubleSide } from "three";

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
        <meshStandardMaterial
          transparent="true"
          opacity="0"
          side={DoubleSide}
        />
      </mesh>
    </group>
  );
}

export default RoomWall;
