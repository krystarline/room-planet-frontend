/* eslint-disable import/order */
import React from "react";

import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";
import Plan from "./components/Plan";

const theme = createTheme({
  typography: {
    fontFamily: "'Edu NSW ACT Foundation', cursive",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters maxWidth={false}>
        <Plan />
      </Container>
    </ThemeProvider>
  );
}

export default App;
