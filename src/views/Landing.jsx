import React from "react";

import LandingContents from "../LandingContents";
import LandingLayout from "../LandingLayout";

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
