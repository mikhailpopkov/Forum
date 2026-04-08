import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { fetchUsers } from "@/features/users";
import { fetchNews } from "@/features/news";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import cl from "./Charts.module.scss";
import { useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const MainChart: React.FC = () => {
  const users = useAppSelector((state) => state.users.data);
  const news = useAppSelector((state) => state.news.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers({ page: 1, limit: 100 }));
    dispatch(fetchNews({ page: 1, limit: 6 }));
  }, [dispatch]);

  const dataChart = {
    labels: ["Общее"],
    datasets: [
      {
        label: "Пользователи",
        data: [users?.length ?? 0],
        backgroundColor: "#0075FF",
      },
      {
        label: "Новости",
        data: [news?.length ?? 0],
        backgroundColor: "#05CD99",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "#fff",
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "Соотношение пользователей к новостям",
        color: "#fff",
        font: {
          size: 18,
        },
      },
    },
  };

  return (
    <div className={cl.chart}>
      <Bar data={dataChart} options={options} />
    </div>
  );
};
