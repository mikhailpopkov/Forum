import cl from "./NewsItem.module.scss";

interface NewsItemProps {
  data: News;
}

export const NewsItem: React.FC<NewsItemProps> = ({ data }) => {
  console.log(data);
  return (
    <div className={cl.item}>
      {data.imageUrl && (
        <div className={cl.itemImgbox}>
          <img src={data.imageUrl} alt={data.title} loading="lazy" />
        </div>
      )}
      <div className={cl.itemTitle}>{data.title}</div>
      <div className={cl.itemDescription}>{data.description}</div>
    </div>
  );
};
