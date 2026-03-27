import { Header } from "@/widgets/header";
import { Outlet } from "react-router";

export const AuthLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
