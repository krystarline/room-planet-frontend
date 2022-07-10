/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-assign */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from "react";

import { useBox } from "@react-three/cannon";

// import { useFrame } from "@react-three/fiber";

function Cube(props) {
  const mesh = useRef();
  const [cube] = useBox(() => ({
    // type: "Static",
    mass: 5,
    args: [1, 1, 1],
    ...props,
  }));

  // useFrame(() => {
  //   mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  // });

  return (
    <mesh ref={mesh} {...props}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default Cube;
