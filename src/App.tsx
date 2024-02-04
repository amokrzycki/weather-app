import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.tsx";
import { ThemeProvider } from "@mui/material";
import theme from "./theme.ts";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
