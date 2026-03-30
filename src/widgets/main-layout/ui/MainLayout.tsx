import { Sidebar } from "@/widgets/sidebar";
import { Outlet } from "react-router";
import cl from "./MainLayout.module.scss";

export const MainLayout: React.FC = () => {
  return (
    <div className={cl.main}>
      <Sidebar />
      <div className={cl.container}>
        <Outlet />
      </div>
    </div>
  );
};
