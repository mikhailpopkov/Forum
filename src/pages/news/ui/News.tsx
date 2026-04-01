import { useAppDispatch } from "@/app/store/store";
import { fetchNews } from "@/features/news/model/newsSlice";
import { CurrencyList, NewsList } from "@/widgets";
import { useEffect } from "react";

export const News: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <div className="b-news">
      <CurrencyList />
      <NewsList />
    </div>
  );
};
