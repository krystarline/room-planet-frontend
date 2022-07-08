import React from "react";
import { usePlane } from "@react-three/cannon";

function RoomWall(props) {
  const [ref] = usePlane(() => ({
    type: "Static",
    material: "ground",
    ...props,
  }));

  return (
    <group ref={ref}>
      <mesh receiveShadow>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial color="beige" />
      </mesh>
    </group>
  );
}

export default RoomWall;
