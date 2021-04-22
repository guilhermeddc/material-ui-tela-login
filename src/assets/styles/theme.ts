import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00FFC5",
    },
    secondary: {
      main: "#EC008C",
    },
    text: {
      primary: "#212121",
    },
    background: {
      default: "#1B1464",
    },
  },
  spacing: 8,
});

export default theme;
