import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import UserPage from "../pages/user.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "users/",
        element: <UserPage />,
      },
    ],
  },
]);

export default router;