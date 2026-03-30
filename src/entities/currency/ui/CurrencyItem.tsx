import type { ItemDataProps } from "../model/types";
import cl from "./CurrencyItem.module.scss";

export const CurrencyItem: React.FC<ItemDataProps> = ({ data }) => {
  return (
    <div className={cl.block}>
      <div className={cl.blockTitle}>{data.cur}</div>
      {data.value && (
        <div className={cl.blockValue}>{(1 / data.value).toFixed(2)}₽</div>
      )}
    </div>
  );
};
