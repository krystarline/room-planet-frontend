import React from "react";

import Container from "@mui/material/Container";

import AppContents from "../../AppContents";
import AppNavBar from "../../AppNavBar";

function Plan() {
  return (
    <Container fixed>
      <AppNavBar />
      <AppContents />
    </Container>
  );
}

export default Plan;
