import cl from "./NewsItem.module.scss";
import { SvgComponent } from "@/shared";

interface NewsItemProps {
  data: News;
}

export const NewsItem: React.FC<NewsItemProps> = ({ data }) => {
  return (
    <div className={cl.item}>
      {data.imageUrl && (
        <div className={cl.itemImgbox}>
          <img src={data.imageUrl} alt={data.title} loading="lazy" />
        </div>
      )}
      <div className={cl.itemHeader}>
        <div className={cl.itemHeaderTitle}>{data.title}</div>
        <div className={cl.itemHeaderUser}>
          {data.author.avatarUrl && (
            <img src={data.author.avatarUrl} alt={data.author.name} />
          )}
          <span>{data.author.name}</span>
        </div>
      </div>
      <div className={cl.itemDescription}>{data.description}</div>
      <div className={cl.itemFooter}>
        <div className={cl.itemReactions}>
          <div className={cl.itemLikes}>
            <SvgComponent name="like" />
            <span>{data.likesCount}</span>
          </div>
          <div className={cl.itemDislikes}>
            <SvgComponent name="dislike" />
            <span>{data.dislikesCount}</span>
          </div>
        </div>
        <div className={cl.itemViews}>{data.views}</div>
      </div>
    </div>
  );
};
