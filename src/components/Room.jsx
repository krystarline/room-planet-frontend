/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import { useAtom } from "jotai";

import { Canvas } from "@react-three/fiber";
import {
  Html,
  ContactShadows,
  OrbitControls,
  Sky,
  useContextBridge,
} from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import Bedroom from "../models/Bedroom";
import RoomPlane from "../models/RoomPlane";
import Bed from "../models/Bed";
import Chair from "../models/Chair";
import Picker from "./Picker";

import { store, colorAtom, modelsAtom } from "../common/atom";

const RoomLayout = styled.div`
  height: 60vh;
  overflow: hidden;
`;

function Room() {
  const [isDragging, setIsDragging] = useState(false);
  const [models] = useAtom(modelsAtom);
  const [color, setColor] = useAtom(colorAtom);
  // const [color, setColor] = useState(store.get(colorAtom));
  // const ContextBridge = useContextBridge();

  // useEffect(() => {
  //   const unsub = store.sub(colorAtom, () => {
  //     const newColor = store.get(colorAtom);
  //     setColor(newColor);
  //   });

  //   return () => unsub();
  // }, []);

  // useEffect(() => {
  //   console.log(color);
  // }, []);

  return (
    <RoomLayout id="room-canvas">
      <Canvas
        camera={{ fov: 13, position: [30, 30, 50] }}
        gl={{ preserveDrawingBuffer: true }}
      >
        {/* <ContextBridge> */}
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
          <Bedroom rotation={[0, -Math.PI / 2, 0]} />
          <RoomPlane position={[0, 0.3, 0]} rotation={[-Math.PI / 2, 0, 0]} />
          {/*
            <RoomWall position={[-10, 5, 0]} rotation={[0, Math.PI / 2, 0]} />
            <RoomWall position={[0, 5, -10]} rotation={[0, 0, 0]} />
            <Box />
          */}
          {models.map(
            (model, index) =>
              model &&
              index === 0 && (
                <Fragment key={index}>
                  <Chair
                    type="Dynamic"
                    // onPointerDown={(e) => {
                    //   e.stopPropagation();
                    //   setColor((prev) => ({
                    //     ...prev,
                    //     current: {
                    //       index,
                    //       name: e.object.material.name,
                    //     },
                    //   }));
                    // }}
                    // onPointerMissed={() =>
                    //   setColor((prev) => ({ ...prev, current: null }))
                    // }
                  />
                </Fragment>
              )
          )}
          {/* <Bed /> */}
        </Physics>
        <Html position={[5, 5, 5]}>{color.current && <Picker />}</Html>
        {/* </ContextBridge> */}
      </Canvas>
    </RoomLayout>
  );
}
// setIsDragging={setIsDragging}
export default Room;
