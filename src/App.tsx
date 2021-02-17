import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

import theme from "./assets/styles/theme";
import Login from "./pages/Login";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Login />
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
