import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9399a2ff",
      dark: "#f0f1f1ff",
    },
    secondary: {
      main: "#7c00ce", // Complementary color to #00ce7c
      dark: "#4d007d", // Darker shade of #7c00ce
    },
    background: {
      default: "#0B131EFF", // Dark background color
      paper: "#202B3BFF", // Slightly lighter background color
    },
    text: {
      primary: "#ffffff", // Text color
      secondary: "#a0a0a0", // Secondary text color
    },
  },
  typography: {
    fontFamily: "Raleway",
  },
});

export default theme;
