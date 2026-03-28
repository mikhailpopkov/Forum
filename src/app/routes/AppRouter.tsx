import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthLayout, MainLayout } from "@/widgets";
import { News, Login, Users } from "@/pages";
import { Registration } from "@/pages/registration";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <News />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
