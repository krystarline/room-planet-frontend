import React from "react";
import { useAtom } from "jotai";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import DraggerIcon from "@mui/icons-material/Place";
import PainterIcon from "@mui/icons-material/ColorLens";
import AutorenewIcon from "@mui/icons-material/Autorenew";

import styled from "styled-components";
import { toolAtom } from "../atoms";

const ToggleButtonLayout = styled.div`
  position: absolute;
  z-index: 999;
`;

function RoomCanvasTools() {
  const [{ type: toolType }, setTool] = useAtom(toolAtom);

  const handleToolChange = (_, type) => {
    setTool(() => ({ type }));
  };

  return (
    <ToggleButtonLayout>
      <ToggleButtonGroup
        exclusive
        orientation="vertical"
        value={toolType}
        onChange={handleToolChange}
      >
        <ToggleButton value="dragger" aria-label="dragger" title="Dragger">
          <DraggerIcon />
        </ToggleButton>
        <ToggleButton value="rotator" aria-label="rotator" title="Rotator">
          <AutorenewIcon />
        </ToggleButton>
        <ToggleButton value="painter" aria-label="painter" title="Painter">
          <PainterIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </ToggleButtonLayout>
  );
}

export default RoomCanvasTools;
