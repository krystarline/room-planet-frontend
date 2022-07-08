import React from "react";
import { usePlane } from "@react-three/cannon";

function RoomPlane(props) {
  const [ref] = usePlane(() => ({
    type: "Static",
    material: "ground",
    ...props,
  }));

  return (
    // 20, 20, transparent="true" opacity="1"
    <group ref={ref}>
      <mesh receiveShadow>
        <planeGeometry args={[4, 4]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
    </group>
  );
}

export default RoomPlane;
