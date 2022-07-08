/* eslint-disable react/prop-types */
import React, { useState, Suspense } from "react";
import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";

// import { Physics } from "@react-three/cannon";

// import RoomPlane from "./RoomPlane";
import Model from "../../models/Model";
// import Box from "./Box";

const ModelCanvasLayout = styled.div`
  height: 20vh;
  overflow: hidden;
`;

function ModelCanvas({ file }) {
  const [isShown, setIsShown] = useState(false);
  // const [models, setModels] = useState([]);
  const handleOnClick = () => {
    setIsShown(true);
  };

  return (
    <ModelCanvasLayout>
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
        <OrbitControls />
        <ContactShadows
          position={[0, -0.8, 0]}
          opacity={0.5}
          scale={10}
          blur={1.5}
          far={0.8}
        />
        {/* <Physics gravity={[0, -9.8, 0]}>
          <RoomPlane position={[-1, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} /> */}
        <Suspense fallback={null}>
          <Model
            position={[-1, 0, 0]}
            file={file}
            value={isShown}
            onDoubleClick={handleOnClick}
          />
        </Suspense>
        {/* <Box />
        </Physics> */}
      </Canvas>
    </ModelCanvasLayout>
  );
}

export default ModelCanvas;
