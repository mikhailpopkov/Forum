import { useAppDispatch } from "@/app/store/store";
import { fetchNews } from "@/features";
import { CurrencyList, NewsList } from "@/widgets";
import { useEffect } from "react";

export const News: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews({ page: 1, limit: 6 }));
  }, []);

  return (
    <div className="b-news">
      <CurrencyList />
      <NewsList />
    </div>
  );
};
