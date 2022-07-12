/* eslint-disable import/order */
import React from "react";

import "./App.css";
import Container from "@mui/material/Container";
import Plan from "./components/Plan";

import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'Edu NSW ACT Foundation', cursive",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <Plan />
      </Container>
    </ThemeProvider>
  );
}

export default App;
