import { CurrencyItem } from "@/entities";
import { Currencies, useCurrency } from "@/features";
import cl from "./CurrencyList.module.scss";

export const CurrencyList: React.FC = () => {
  const selectedCurrencies = useCurrency(Currencies.CurrencyCourses);

  return (
    <div className={cl.list}>
      {selectedCurrencies &&
        selectedCurrencies.map((item) => (
          <CurrencyItem key={item.cur} data={item} />
        ))}
    </div>
  );
};
