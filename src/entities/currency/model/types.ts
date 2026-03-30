export interface ItemDataProps {
  data: CurrencyType;
}

interface CurrencyType {
  cur: "USD" | "EUR" | "GBP" | "JPY";
  value: number | undefined;
}
