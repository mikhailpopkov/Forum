import { useFetching } from "@/shared/libs";
import { useEffect, useState } from "react";
import type { CurrencyType } from "./types";

export const useCurrency = (callback: () => Promise<CurrencyType>) => {
  const [conversionRates, setConversionRates] = useState<{
    [key: string]: number;
  } | null>(null);
  const [fetching] = useFetching(async (): Promise<void> => {
    const res = await callback();
    setConversionRates(res?.conversion_rates);
  });

  useEffect(() => {
    fetching();
  }, []);

  const neededCurrencies = ["USD", "EUR", "GBP", "JPY"] as const;
  const selectedCurrencies = neededCurrencies.map((cur) => ({
    cur,
    value: conversionRates?.[cur],
  }));

  return selectedCurrencies;
};
