import React from "react";
import { useAtom } from "jotai";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import DraggerIcon from "@mui/icons-material/Place";
import PainterIcon from "@mui/icons-material/ColorLens";

import { toolAtom } from "../atoms";

function RoomCanvasTools() {
  const [{ type: toolType }, setTool] = useAtom(toolAtom);

  const handleToolChange = (_, type) => {
    setTool(() => ({ type }));
  };

  return (
    <ToggleButtonGroup
      exclusive
      orientation="vertical"
      value={toolType}
      onChange={handleToolChange}
    >
      <ToggleButton value="dragger" aria-label="dragger">
        <DraggerIcon />
      </ToggleButton>
      <ToggleButton value="painter" aria-label="painter">
        <PainterIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default RoomCanvasTools;
