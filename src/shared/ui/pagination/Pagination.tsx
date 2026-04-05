import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { usePagination } from "@shared/libs";
import cl from "./Pagination.module.scss";
import { fetchNews } from "@/features";

export const Pagination: React.FC = () => {
  const { meta } = useAppSelector((state) => state.news);
  const paginationButtons: number[] = usePagination(meta?.totalPages ?? 0);
  const dispatch = useAppDispatch();

  return (
    <div className={cl.pagination}>
      {paginationButtons &&
        paginationButtons.map((item) => (
          <button
            onClick={() => dispatch(fetchNews({ page: item, limit: 6 }))}
            key={item}
            className={item == meta?.page ? `${cl.active}` : ``}
          >
            {item}
          </button>
        ))}
    </div>
  );
};
