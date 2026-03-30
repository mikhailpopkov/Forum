import { Link } from "react-router-dom";
import cl from "./AuthHeader.module.scss";
import { routes } from "@/shared";

export const AuthHeader: React.FC = () => {
  return (
    <header className={cl.header}>
      <div className={cl.headerWrapper}>
        <div className={cl.headerLogo}>Dashboard Forum</div>
        <ul className={cl.headerList}>
          <li>
            <Link className={cl.headerListNews} to={routes.news}>
              Новости
            </Link>
          </li>
          <li>
            <Link className={cl.headerListUsers} to={routes.users}>
              Пользователи
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
