import React from "react";

import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";

import Room from "./components/Room";
import ModelCarousel from "./components/ModelCarousel";

function AppContents() {
  return (
    <Container fixed>
      <Room />
      <Divider />
      <ModelCarousel />
      <Divider />
    </Container>
  );
}

export default AppContents;
