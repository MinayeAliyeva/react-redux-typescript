import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { router } from "./Routes/Routes";
import "../src/scss/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
);

reportWebVitals();
