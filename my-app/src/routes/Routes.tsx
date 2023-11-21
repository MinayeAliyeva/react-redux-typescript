import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home";
import About from "../Components/About";
import NotFound from "../Components/NotFound";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
