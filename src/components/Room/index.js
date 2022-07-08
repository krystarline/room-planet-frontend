import React, { useState } from "react";
import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
// import { Physics } from "@react-three/cannon";

import RoomPlane from "../../models/RoomPlane";
// import RoomWall from "./RoomWall";
import Box from "../../models/Box";
import Model from "../../models/Model";

const RoomLayout = styled.div`
  height: 60vh;
  overflow: hidden;
`;

function Room() {
  const [isDragging, setIsDragging] = useState(false);
  // flat linear
  return (
    <RoomLayout>
      <Canvas camera={{ fov: 10, position: [20, 15, 25] }}>
        <pointLight
          intensity={1.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <directionalLight intensity={1} />
        <ambientLight intensity={1} />
        <OrbitControls enabled={!isDragging} />
        <ContactShadows
          position={[0, -0.8, 0]}
          opacity={0.5}
          scale={10}
          blur={1.5}
          far={0.8}
        />
        {/* <Physics gravity={[0, -9.8, 0]}> */}
        <Model position={[-1, 0, 0]} />
        <RoomPlane position={[-1, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        {/* <RoomWall position={[-10, 5, 0]} rotation={[0, Math.PI / 2, 0]} />
          <RoomWall position={[0, 5, -10]} rotation={[0, 0, 0]} /> */}
        <Box setIsDragging={setIsDragging} />
        {/* </Physics> */}
      </Canvas>
    </RoomLayout>
  );
}

export default Room;
