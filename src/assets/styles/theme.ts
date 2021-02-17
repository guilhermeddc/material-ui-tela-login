import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0081CB",
    },
    secondary: {
      main: "#333333",
      dark: "#33333326",
    },
    text: {
      primary: "#212121",
    },
    background: {
      default: "#333333",
    },
  },
  spacing: 8,
});

export default theme;
