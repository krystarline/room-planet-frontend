/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from "react";
import { useThree } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";

function Box({ setIsDragging, ...props }) {
  const ref = useRef();
  const [position, setPosition] = useState([0, 0, 0]);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const bind = useDrag(({ active, offset: [x, y] }) => {
    const [, , z] = position;

    setIsDragging(active);
    setPosition([x / aspect, -y / aspect, z]);
  });

  return (
    <mesh castShadow ref={ref} position={position} {...bind()} {...props}>
      <boxGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="beige" />
    </mesh>
  );
}

export default Box;
