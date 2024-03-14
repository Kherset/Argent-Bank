import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/pages/homepage/Homepage";
import SignIn from "./components/pages/sign-in/SignIn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./components/pages/user/User";
import { store } from "./app/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/profile",
    element: <User />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
