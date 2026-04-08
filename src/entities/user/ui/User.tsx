import { Link } from "react-router-dom";
import cl from "./User.module.scss";

interface UserProps {
  data: {
    id: number;
    email: string;
    name: string;
    telegramId: string | null;
    avatarUrl: string | null;
    bio: string | null;
    backgroundUrl: string | null;
    rating: number;
    createdAt: string;
    updatedAt: string;
  };
}

export const User: React.FC<UserProps> = ({ data }) => {
  const date = new Date(data.createdAt);
  return (
    <tr>
      <td>
        <div className={cl.user}>
          {data.avatarUrl && (
            <div className={cl.userImgbox}>
              <img src={data.avatarUrl} alt={data.name} />
            </div>
          )}
          <div className={cl.userName}>{data.name}</div>
          <div className={cl.userEmail}>{data.email}</div>
        </div>
      </td>
      <td>{data.rating}</td>
      <td>{date.toLocaleDateString()}</td>
      <td>
        <Link to="/">Подробнее</Link>
      </td>
    </tr>
  );
};
