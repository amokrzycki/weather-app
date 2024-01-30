import { createBrowserRouter } from "react-router-dom";
import View from "../components/View/View.tsx";
import Settings from "../components/Settings/Settings.tsx";
import MapView from "../components/MapView/MapView.tsx";
import Cities from "../components/Cities/Cities.tsx";
import Weather from "../components/Weather/Weather.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <View />,
    children: [
      {
        path: "/",
        element: <Weather />,
      },
      {
        path: "cities",
        element: <Cities />,
      },
      {
        path: "map",
        element: <MapView />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

export default router;
