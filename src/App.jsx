/* eslint-disable import/order */
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container, ThemeProvider, createTheme } from "@mui/material";

import { Landing, Plan } from "./views";

import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: "'Edu NSW ACT Foundation', cursive",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters maxWidth={false}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/plan" element={<Plan />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
