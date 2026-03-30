import { $currencies } from "@/shared/model/http/api";
import type { CurrencyType } from "../model/types";

export class Currencies {
  static async CurrencyCourses(): Promise<CurrencyType> {
    const res = await $currencies.get<CurrencyType>("/RUB");
    return res.data;
  }
}
