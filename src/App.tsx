import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

import theme from "./assets/styles/theme";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
