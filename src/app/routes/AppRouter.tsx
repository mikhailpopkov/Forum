import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "@widgets/layout";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
