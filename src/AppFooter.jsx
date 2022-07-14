import React from "react";
import { Container, Typography, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

function AppFooter() {
  const handleGithubClick = () => {};

  return (
    <Container fixed sx={{ display: "flex", height: "100%" }}>
      <Typography
        variant="body2"
        color="#aba9a6"
        component="div"
        sx={{ flexGrow: 1 }}
      >
        © 2022 Room Planet. All rights reserved.
      </Typography>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="email"
        sx={{ mr: 2 }}
      >
        <EmailIcon />
      </IconButton>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="github"
        sx={{ mr: 2 }}
        onClick={handleGithubClick}
      >
        <GitHubIcon />
      </IconButton>
    </Container>
  );
}

export default AppFooter;
