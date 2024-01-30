import React from "react";
import { RouterProvider, createBrowserRouter, Outlet ,Navigate} from "react-router-dom";
import LoginForm from "../layouts/LoginForm";
import RegisterForm from "../layouts/RegisterForm";

const routerGuest = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <Navigate to="/" />,
    children: [
      { path: "", element: <p className="text-5x;">Home</p> },
      { path: "login", element: <LoginForm /> },
      { path: "register", element: <RegisterForm /> },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={routerGuest} />;
}

export default AppRouter;
