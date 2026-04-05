import { $api } from "@/shared/model";
import type { AxiosResponse } from "axios";
import type { NewsType } from "../model/types";

export class RequestsNews {
  static async FetchNews(
    page = 1,
    limit = 6,
  ): Promise<AxiosResponse<NewsType>> {
    return await $api.get<NewsType>("/news", {
      params: {
        page,
        limit,
      },
    });
  }
}
