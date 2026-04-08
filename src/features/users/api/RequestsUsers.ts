import { $api } from "@/shared/model";

export class RequestsUsers {
  static async FetchUsers(page: number = 1, limit: number = 10) {
    return await $api.get("/users", {
      params: {
        page,
        limit,
      },
    });
  }
}
