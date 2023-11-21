// routes.tsx
import { IRoute } from "../IRoute";
import MainRout from "../MainLayout/MainRout";
import Home from "../Components/Home";
import About from "../Components/About";

export const routes: Array<IRoute> = [
  {
    path: '/',
    element: <MainRout />,
    children: [
      {
        path: '', // Ana sayfa için
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
];
