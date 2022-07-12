import React from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChairIcon from "@mui/icons-material/Chair";

import PlanGuide from "./components/PlanGuide";

function AppNavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            // aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ChairIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Room Planet
          </Typography>
          <PlanGuide />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            // aria-label="menu"
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
