import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { useEffect } from "react";
import { fetchUsers } from "@/features";
import cl from "./Users.module.scss";
import { User } from "@/entities";

export const Users: React.FC = () => {
  const { data } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers({ page: 1, limit: 10 }));
  }, []);
  return (
    <div className={cl.container}>
      <h1>Таблица пользователей</h1>
      <div className={cl.wrapper}>
        <table>
          <thead>
            <tr>
              <th>Информация о пользователе</th>
              <th>Рейтинг</th>
              <th>Дата регистрации</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((item) => <User key={item.id} data={item} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};
