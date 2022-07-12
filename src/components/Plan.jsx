/* eslint-disable import/no-useless-path-segments */
import React from "react";

import Container from "@mui/material/Container";
import { useBeforeunload } from "react-beforeunload";

import AppContents from "../AppContents";
import AppNavBar from "../AppNavBar";

function Plan() {
  useBeforeunload((event) => event.preventDefault());

  return (
    <Container fixed>
      <AppNavBar />
      <AppContents />
    </Container>
  );
}

export default Plan;
