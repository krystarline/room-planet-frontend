/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import { Debug, Physics } from "@react-three/cannon";
import { ContactShadows, OrbitControls, Sky } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  EffectComposer,
  Outline,
  Selection,
} from "@react-three/postprocessing";
import { useAtom, useAtomValue } from "jotai";
import React, { Fragment, createElement, useRef } from "react";
import styled from "styled-components";

import { colorAtom, modelsAtom, toolTypeAtom } from "../atoms";
import {
  ArmChair,
  Bed,
  Bedroom,
  Cabinet,
  Chair,
  Desk,
  Hanger,
  LeatherChair,
  Pouf,
  RoomPlane,
  RoomWall,
  Shelf,
  Sofa,
  Table,
} from "../models";
import Picker from "./Picker";
import RoomCanvasTools from "./RoomCanvasTools";

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
      ref.current.object.position.y = 130;
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
    {
      component: Table,
      props: { position: [0, 3, 0], showroomType: "room" },
    },
    { component: Bed, props: { position: [0, 3, 0], showroomType: "room" } },
    { component: Desk, props: { position: [0, 3, 0], showroomType: "room" } },
    { component: Pouf, props: { position: [0, 3, 0], showroomType: "room" } },
    {
      component: LeatherChair,
      props: { position: [0, 3, 0], showroomType: "room" },
    },
    {
      component: Sofa,
      props: { position: [0, 3, 0], showroomType: "room" },
    },
    {
      component: ArmChair,
      props: { position: [0, 3, 0], showroomType: "room" },
    },
    {
      component: Shelf,
      props: { position: [0, 3, 0], showroomType: "room" },
    },
    {
      component: Hanger,
      props: { position: [0, 3, 0], showroomType: "room" },
    },
    {
      component: Cabinet,
      props: {
        position: [0, 3, 0],
        showroomType: "room",
      },
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
        <Sky sunPosition={[0, 0.1, 0]} />
        <pointLight
          intensity={1.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <directionalLight intensity={0.2} />
        <ambientLight intensity={0.5} />
        <ContactShadows
          position={[0, -0.8, 0]}
          opacity={0.5}
          scale={10}
          blur={1.5}
          far={0.8}
        />
        <Physics gravity={[0, -9.8, 0]}>
          <Debug color="black">
            <Bedroom position={[0, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
            <RoomPlane
              position={[0, 0.45, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <RoomWall position={[-7.95, 4, 0]} rotation={[0, Math.PI / 2, 0]} />
            <RoomWall position={[0, 4, -7.95]} rotation={[0, 0, 0]} />
            {/* <RoomWall position={[8, 4, 0]} rotation={[0, Math.PI / 2, 0]} />
            <RoomWall position={[0, 4, 8]} rotation={[0, 0, 0]} /> */}
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
