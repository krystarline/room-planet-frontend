/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { useAtom } from "jotai";

import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls, Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import RoomPlane from "../models/RoomPlane";
import Bedroom from "../models/Bedroom";
import Chair from "../models/Chair";

import { modelsAtom } from "../common/atom";

const RoomLayout = styled.div`
  height: 60vh;
  overflow: hidden;
`;

function Room() {
  const [isDragging, setIsDragging] = useState(false);
  const [models, setModels] = useAtom(modelsAtom);

  useEffect(() => {
    console.log(`Room: useEffect`);
    console.log(models);
  });

  return (
    <RoomLayout>
      <Canvas camera={{ fov: 18, position: [30, 15, 30] }}>
        <Sky sunPosition={[0, 0.2, 0]} />
        <pointLight
          intensity={1.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <directionalLight intensity={0.5} />
        <ambientLight intensity={1} />
        <OrbitControls enabled={!isDragging} />
        <ContactShadows
          position={[0, -0.8, 0]}
          opacity={0.5}
          scale={10}
          blur={1.5}
          far={0.8}
        />
        <Physics gravity={[0, -9.8, 0]}>
          <RoomPlane position={[0, 0.3, 0]} rotation={[-Math.PI / 2, 0, 0]} />
          {/*
            <RoomWall position={[-10, 5, 0]} rotation={[0, Math.PI / 2, 0]} />
            <RoomWall position={[0, 5, -10]} rotation={[0, 0, 0]} />
            <Box />
          */}
          {/* <Chair /> */}
          {models.map(
            (model, index) =>
              model &&
              index === 0 && (
                <Fragment key={index}>
                  <Chair type="Dynamic" />
                </Fragment>
              )
          )}
          <Bedroom rotation={[0, -Math.PI / 2, 0]} />
        </Physics>
      </Canvas>
    </RoomLayout>
  );
}
// setIsDragging={setIsDragging}
export default Room;
