import { NavLink } from "react-router";
import cl from "./Sidebar.module.scss";
import { routes } from "@/shared";
import { SvgComponent } from "@/shared";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { logout } from "@/features/auth/model/authSlice";

export const Sidebar: React.FC = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const dispatch = useAppDispatch();

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
          <>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? `${cl.active}` : "")}
                to={routes.profile}
              >
                <span>
                  <SvgComponent name="profile" />
                </span>
                Профиль
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => dispatch(logout())} to={routes.news}>
                <span>
                  <SvgComponent name="logout" />
                </span>
                Выйти
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
