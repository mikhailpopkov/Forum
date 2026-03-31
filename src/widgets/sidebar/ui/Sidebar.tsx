import { NavLink } from "react-router";
import cl from "./Sidebar.module.scss";
import { routes } from "@/shared";
import { SvgComponent } from "@/shared";
import { useAppSelector } from "@/app/store/store";

export const Sidebar: React.FC = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  console.log(isAuth);
  return (
    <div className={`${cl.sidebar} sidebar`}>
      <div className={cl.sidebarTitle}>Dashboard Forum</div>
      <ul className={cl.sidebarList}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? `${cl.active}` : "")}
            to={routes.news}
          >
            <span>
              <SvgComponent name="news" />
            </span>
            Новости
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? `${cl.active}` : "")}
            to={routes.users}
          >
            <span>
              <SvgComponent name="users" />
            </span>
            Пользователи
          </NavLink>
        </li>
      </ul>
      <div className={cl.sidebarSubtitle}>Страницы профиля</div>
      <ul className={cl.sidebarList}>
        {!isAuth ? (
          <>
            <li>
              <NavLink to={routes.login}>
                <span>
                  <SvgComponent name="login" />
                </span>
                Войти
              </NavLink>
            </li>
            <li>
              <NavLink to={routes.registration}>
                <span>
                  <SvgComponent name="registration" />
                </span>
                Зарегистрироваться
              </NavLink>
            </li>
          </>
        ) : (
          <li>
            <NavLink to={routes.profile}>
              <span>
                <SvgComponent name="profile" />
              </span>
              Профиль
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};
