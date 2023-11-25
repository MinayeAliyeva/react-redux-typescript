import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home";
import About from "../Components/About";
import NotFound from "../Components/NotFound";
import Users from "../Components/Users";
import User from "../Components/User";
import UserInfoOutlet from "../Components/UsersInfoOutlet";

// interface IRoute {
//   index: string;
// }
// let x: IRoute["index"] = "jjj";
// const obj = {
//   index: 5,
// };

const routes: RouteObject[] = [
  {
    path: "",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users",
        element: <UserInfoOutlet />,
        children: [
          {
            // dan sonra shash ne ise gelmir demekdi
            index: true,
            element: <Users />,
          },
          {
            path: ":id",
            element: <User />,
            children: [
              {
                path: "*",
                element: <div>Id error for user</div>,
              },
              {
                path: ":minaya",
                element: <div>Buldu Men Minaya</div>,
              },
            ],
          },
          {
            path: "*",
            element: <div>User not faund for users</div>,
          },
        ],
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
//users/1
