// /* eslint-disable react/prop-types */
// /* eslint-disable react/jsx-props-no-spreading */
import React from "react";
// import { useThree } from "@react-three/fiber";
// import { useDrag } from "@use-gesture/react";

// function Box({ setIsDragging, ...props }) {
//   const ref = useRef();
//   const [position, setPosition] = useState([0, 3, 0]);
//   const { size, viewport } = useThree();
//   // const [box] = useBox(() => ({
//   //   type: "Dynamic",
//   //   mass: 6,
//   //   ...props,
//   // }));
//   const aspect = size.width / viewport.width;

//   const bind = useDrag(({ active, offset: [x, y] }) => {
//     const [, , z] = position;

//     setIsDragging(active);
//     setPosition([x / aspect, -y / aspect, z]);
//   });

//   return (
//     <mesh castShadow ref={ref} position={position} {...bind()} {...props}>
//       <boxGeometry attach="geometry" />
//       <meshStandardMaterial attach="material" color="orange" />
//     </mesh>
//   );
// }

// export default Box;

import { useBox } from "@react-three/cannon";

function Box({ ...props }) {
  const [box] = useBox(() => ({
    type: "Dynamic",
    mass: 8,
    ...props,
  }));

  return (
    <mesh castShadow ref={box} scale={[1, 1, 1]}>
      <boxGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="red" />
    </mesh>
  );
}

export default Box;
