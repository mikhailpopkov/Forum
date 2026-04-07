import { useAppDispatch } from "@/app/store/store";
import { fetchNews } from "@/features";
import { CurrencyList, NewsList } from "@/widgets";
import { useEffect } from "react";
import cl from "./News.module.scss";
import { UserBanner } from "@/entities";

export const News: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews({ page: 1, limit: 6 }));
  }, []);

  return (
    <div className={cl.news}>
      <CurrencyList />
      <div className={cl.newsEntities}>
        <UserBanner />
      </div>
      <NewsList />
    </div>
  );
};
