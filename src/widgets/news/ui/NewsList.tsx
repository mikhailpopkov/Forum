import { useAppSelector } from "@/app/store/store";
import cl from "./NewsList.module.scss";
import { NewsItem } from "@/entities";

export const NewsList: React.FC = () => {
  const { data } = useAppSelector((state) => state.news);

  return (
    <div className={cl.list}>
      {data && data.map((item) => <NewsItem key={item.id} data={item} />)}
    </div>
  );
};
