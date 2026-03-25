import { Outlet } from "react-router";

export const MainLayout: React.FC = () => {
  return (
    <>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};
