/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, { useRef, useMemo, createElement, Fragment } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sky, OrbitControls, ContactShadows } from "@react-three/drei";
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
import Desk from "../models/Desk";
import Bed from "../models/Bed";
import Pouf from "../models/Pouf";
import LeatherChair from "../models/LeatherChair";

import RoomCanvasTools from "./RoomCanvasTools";
import Picker from "./Picker";
import { colorAtom, modelsAtom, toolTypeAtom } from "../atoms";

const RoomLayout = styled.div`
  height: 60vh;
  overflow: hidden;
`;

function OrbitController() {
  const ref = useRef();
  const toolType = useAtomValue(toolTypeAtom);

  useFrame(() => {
    if (toolType === "dragger" || toolType === "rotator") {
      ref.current.object.position.x = 0;
      ref.current.object.position.y = 100;
      ref.current.object.position.z = 0;
    }

    ref.current.update();
  });

  return (
    <OrbitControls
      ref={ref}
      enabled={!(toolType === "dragger" || toolType === "rotator")}
    />
  );
}

function Room() {
  const models = useAtomValue(modelsAtom);
  const [color, setColor] = useAtom(colorAtom);
  const furniture = [
    { component: Chair, props: { position: [0, 3, 0], showroomType: "room" } },
    { component: Table, props: { position: [0, 3, 0], showroomType: "room" } },
    { component: Bed, props: { position: [0, 3, 0], showroomType: "room" } },
    { component: Desk, props: { position: [0, 3, 0], showroomType: "room" } },
    { component: Pouf, props: { position: [0, 3, 0], showroomType: "room" } },
    {
      component: LeatherChair,
      props: { position: [0, 3, 0], showroomType: "room" },
    },
  ];

  return (
    <RoomLayout id="room-canvas">
      <RoomCanvasTools />
      {color?.current && <Picker />}
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
        <ContactShadows
          position={[0, -0.8, 0]}
          opacity={0.5}
          scale={10}
          blur={1.5}
          far={0.8}
        />
        <Physics gravity={[0, -9.8, 0]}>
          <Debug color="black">
            <RoomPlane position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
            <RoomWall position={[-8, 4, 0]} rotation={[0, Math.PI / 2, 0]} />
            <RoomWall position={[0, 4, -8]} rotation={[0, 0, 0]} />
            <Selection>
              {/* <EffectComposer multisampling={8} autoClear={false}>
                <Outline
                  blur
                  visibleEdgeColor="white"
                  edgeStrength={10}
                  width={500}
                />
              </EffectComposer> */}
              {furniture.map(({ component, props }, index) => (
                <Fragment key={index}>
                  {models[index] &&
                    createElement(component, { type: "Dynamic", ...props })}
                </Fragment>
              ))}
            </Selection>
          </Debug>
        </Physics>
        <OrbitController />
      </Canvas>
    </RoomLayout>
  );
}

export default Room;
