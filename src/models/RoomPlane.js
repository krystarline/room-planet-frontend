/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from "react";
import { usePlane } from "@react-three/cannon";

function RoomPlane({ ...props }) {
  const ref = useRef();
  const [plane] = usePlane(() => ({
    type: "Static",
    material: "ground",
    ...props,
  }));

  return (
    // 20, 20, transparent="true" opacity="1"
    <group ref={ref} {...props}>
      <mesh receiveShadow>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="brown" />
      </mesh>
    </group>
  );
}

export default RoomPlane;
