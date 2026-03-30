import { AuthHeader } from "@/widgets/auth-header";
import { Outlet } from "react-router";

export const AuthLayout: React.FC = () => {
  return (
    <>
      <AuthHeader />
      <Outlet />
    </>
  );
};
