/* eslint-disable import/no-useless-path-segments */
import React from "react";
import { useBeforeunload } from "react-beforeunload";

import AppContents from "../AppContents";
import AppNavBar from "../AppNavBar";

function Plan() {
  useBeforeunload((event) => event.preventDefault());

  return (
    <>
      <AppNavBar />
      <AppContents />
    </>
  );
}

export default Plan;
