import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home";
import About from "../Components/About";
import NotFound from "../Components/NotFound";

// interface IRoute {
//   index: string;
// }
// let x: IRoute["index"] = "jjj";
// const obj = {
//   index: 5,
// };
// let z = obj["index"];


const routes:RouteObject[] = [
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
];

//createBrowserRouter iki parametr alir birincisi budu
export const router = createBrowserRouter(routes);
