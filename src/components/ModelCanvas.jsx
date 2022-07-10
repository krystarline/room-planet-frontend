/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import styled from "styled-components";
import { useAtom } from "jotai";

import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import { modelsAtom } from "../common/atom";

const ModelCanvasLayout = styled.div`
  height: 20vh;
  overflow: hidden;
`;

function ModelCanvas({ children, index }) {
  const [models, setModels] = useAtom(modelsAtom);
  const handleOnDoubleClick = () => {
    // e.stopPropagation();
    setModels((ms) => {
      ms[index] = !ms[index];
      return [...ms];
    });
  };

  useEffect(() => {
    console.log(`ModelCanvas: useEffect: modelAtom: ${models}`);
  });

  return (
    <ModelCanvasLayout>
      <div onDoubleClick={handleOnDoubleClick}>
        <Canvas camera={{ fov: 23, position: [10, 2, 10] }}>
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
          <Physics gravity={[0, -9.8, 0]}>{children}</Physics>
        </Canvas>
      </div>
    </ModelCanvasLayout>
  );
}

export default ModelCanvas;
