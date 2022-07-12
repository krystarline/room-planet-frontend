/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback } from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChairIcon from "@mui/icons-material/Chair";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import html2canvas from "html2canvas";
import downloadjs from "downloadjs";
import PlanGuide from "./components/PlanGuide";

function AppNavBar() {
  const handleCaptureClick = useCallback(async () => {
    const canvas = await html2canvas(document.getElementById("room-canvas"));
    const dataURL = canvas.toDataURL("image/png");

    downloadjs(dataURL, "room.png", "image/png");
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
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
            sx={{ mr: 2 }}
            onClick={handleCaptureClick}
          >
            <ScreenshotMonitorIcon />
          </IconButton>
          <PlanGuide />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="back"
            sx={{ mr: 2 }}
          >
            <ArrowBackIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppNavBar;
