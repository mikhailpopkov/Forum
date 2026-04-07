import { useAppSelector } from "@/app/store/store";
import cl from "./UserBanner.module.scss";
import { routes } from "@/shared";
import { Link } from "react-router-dom";

export const UserBanner: React.FC = () => {
  const { isAuth, user } = useAppSelector((state) => state.auth);
  return (
    <>
      {isAuth && user ? (
        <div className={cl.banner}>
          <div className={cl.bannerWrapper}>
            <div className={cl.bannerText}>
              Добро пожаловать, <br />
              <span>{"user" in user ? user.user?.name : ""}</span>
              Вам доступны все возможности нашего ресурса
            </div>
            <Link to={routes.profile}>Профиль</Link>
          </div>
        </div>
      ) : (
        <div className={cl.banner}>
          <div className={cl.bannerWrapper}>
            <div className={cl.bannerText}>
              Добро пожаловать, <br /> Если хотите использовать весь функционал
              сайта, то необходимо авторизоваться
            </div>
            <Link to={routes.login}>Авторизоваться</Link>
          </div>
        </div>
      )}
    </>
  );
};
