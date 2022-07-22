/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import ChairIcon from "@mui/icons-material/Chair";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

function LandingContents() {
  const backgroundImage = useMemo(() => "Room-Planet.png", []);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/plan");
  };

  return (
    <>
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h1" marked="center">
        Room Planet
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h4"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Display your room with your favorite color !
      </Typography>
      <Button
        variant="contained"
        size="large"
        startIcon={<ChairIcon />}
        onClick={handleClick}
      >
        Get Started
      </Button>
      <Typography variant="h6" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </>
  );
}

export default LandingContents;
