import ChairIcon from "@mui/icons-material/Chair";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";
import React, { useCallback } from "react";

import PlanGuide from "./components/PlanGuide";

function AppNavBar() {
  const handleCaptureClick = useCallback(async () => {
    const canvas = await html2canvas(document.getElementById("room-canvas"));
    const dataURL = canvas.toDataURL("image/png");

    downloadjs(dataURL, "room.png", "image/png");
  }, []);

  return (
    <AppBar position="static">
      <Container fixed disableGutters>
        <Toolbar disableGutters>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="main"
            sx={{ mr: 2 }}
          >
            <ChairIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Room Planet
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="default"
            aria-label="screen-shot"
            title="Screenshot"
            sx={{ mr: 2 }}
            onClick={handleCaptureClick}
          >
            <ScreenshotMonitorIcon />
          </IconButton>
          <PlanGuide />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppNavBar;
