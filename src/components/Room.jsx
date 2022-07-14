/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, ContactShadows, OrbitControls, Sky } from "@react-three/drei";
import { Physics, Debug } from "@react-three/cannon";
import {
  Selection,
  EffectComposer,
  Outline,
} from "@react-three/postprocessing";
import { useAtom, useAtomValue } from "jotai";
import styled from "styled-components";

import RoomPlane from "../models/RoomPlane";
import RoomWall from "../models/RoomWall";
import Chair from "../models/Chair";
import Table from "../models/Table";
import Picker from "./Picker";

import { colorAtom, modelsAtom, toolAtom } from "../common/atom";
import RoomCanvasTools from "./RoomCanvasTools";

const RoomLayout = styled.div`
  height: 60vh;
  overflow: hidden;
`;

// function RoomControls() {
//   const tool = useAtomValue(toolAtom);
//   const camera = useThree((state) => state.camera);

//   useEffect(() => {
//     if (tool.type === "dragger") {
//       camera.position.set(...[60, 100, 50]);
//       // camera.lookAt(...[0, 0, 0]);
//     }

//     camera.position.set(...[80, 60, 50]);
//   }, [camera, tool]);
// }

function Room() {
  const models = useAtomValue(modelsAtom);
  const { type: toolType } = useAtomValue(toolAtom);
  const [color, setColor] = useAtom(colorAtom);

  return (
    <RoomLayout id="room-canvas">
      <Canvas
        camera={{
          fov: 9,
          position: [80, 60, 50],
        }}
        gl={{ preserveDrawingBuffer: true }}
        onPointerMissed={() => setColor((prev) => ({ ...prev, current: null }))}
      >
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
        <OrbitControls enabled={!(toolType === "dragger")} />
        <ContactShadows
          position={[0, -0.8, 0]}
          opacity={0.5}
          scale={10}
          blur={1.5}
          far={0.8}
        />
        <Html position={[5, 10, 5]}>
          <RoomCanvasTools />
          {color?.current && <Picker />}
        </Html>
        <Physics gravity={[0, -9.8, 0]}>
          <Debug color="black">
            <RoomPlane position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
            <RoomWall position={[-8, 4, 0]} rotation={[0, Math.PI / 2, 0]} />
            <RoomWall position={[0, 4, -8]} rotation={[0, 0, 0]} />
            {/* <Bedroom rotation={[0, -Math.PI / 2, 0]} /> */}

            {/* <Lamp /> */}

            <Selection>
              <EffectComposer multisampling={8} autoClear={false}>
                <Outline
                  blur
                  visibleEdgeColor="white"
                  edgeStrength={10}
                  width={500}
                />
              </EffectComposer>
              {models[0] && <Chair boxProps={{ type: "Dynamic" }} />}
              {models[1] && <Table boxProps={{ type: "Dynamic" }} />}
            </Selection>
          </Debug>
        </Physics>
        {/* <RoomControls /> */}
      </Canvas>
    </RoomLayout>
  );
}

export default Room;
