import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import React from "react";

import ModelCarousel from "./components/ModelCarousel";
import Room from "./components/Room";

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
