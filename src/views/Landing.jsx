/* eslint-disable import/no-named-as-default */
import React from "react";

import LandingLayout from "../LandingLayout";
import LandingContents from "../LandingContents";

function Landing() {
  const backgroundImage = "Room-Planet.png";

  return (
    <LandingLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9",
        backgroundPosition: "center",
      }}
    >
      <LandingContents />
    </LandingLayout>
  );
}

export default Landing;
