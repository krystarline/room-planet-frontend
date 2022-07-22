/* eslint-disable react/button-has-type */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
import FormatColorResetIcon from "@mui/icons-material/FormatColorReset";
import IconButton from "@mui/material/IconButton";
import { Physics } from "@react-three/cannon";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useAtom, useSetAtom } from "jotai";
import React from "react";
import styled from "styled-components";

import { colorAtom, modelsAtom } from "../atoms";

const ModelCanvasLayout = styled.div`
  height: 20vh;
  /* border-radius: 3%; */
  border-left: 2px solid #808080;
  overflow: hidden;
  cursor: pointer;
`;

const ResetButtonLayout = styled.div`
  position: absolute;
  z-index: 999;
`;

function ModelCanvas({ children, index }) {
  const setModels = useSetAtom(modelsAtom);
  const [{ items }, setColor] = useAtom(colorAtom);

  const handleResetClick = (e) => {
    setColor(({ current: prevCurrent, items: prevItems }) => {
      const newItems = prevItems.map((item, i) => {
        if (index === i) {
          const newItem = { ...item };

          Object.keys(item).forEach((key) => {
            newItem[key] = "#ffffff";
          });

          return newItem;
        }

        return item;
      });

      return {
        current: prevCurrent,
        items: newItems,
      };
    });
  };
  const handleOnDoubleClick = () => {
    setModels((prevModels) => {
      prevModels[index] = !prevModels[index];
      return [...prevModels];
    });
  };

  return (
    <ModelCanvasLayout>
      <div onDoubleClick={handleOnDoubleClick}>
        <ResetButtonLayout>
          <IconButton
            size="large"
            edge="end"
            color="default"
            aria-label="reset"
            title="Color-Reset"
            sx={{ mr: 2 }}
            onClick={handleResetClick}
          >
            <FormatColorResetIcon />
          </IconButton>
        </ResetButtonLayout>
        <Canvas camera={{ fov: 23, position: [10, 2, 10] }}>
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
          <OrbitControls />
          <Physics gravity={[0, -9.8, 0]}>{children}</Physics>
        </Canvas>
      </div>
    </ModelCanvasLayout>
  );
}

export default ModelCanvas;
