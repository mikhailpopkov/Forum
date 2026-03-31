import { $api } from "@/shared/model";
import type { LoginUser } from "../model/types";
import type { AxiosResponse } from "axios";
import axios from "axios";

export default class AuthUser {
  static async LoginUser(
    email: string,
    password: string,
  ): Promise<AxiosResponse<LoginUser>> {
    return await $api.post<LoginUser>("/auth/login", {
      email,
      password,
    });
  }

  static async RegisterUser(
    email: string,
    password: string,
    name: string,
  ): Promise<AxiosResponse<LoginUser>> {
    return await $api.post<LoginUser>("/auth/register", {
      email,
      password,
      name,
    });
  }

  static async RefreshUser(
    refreshToken: string,
  ): Promise<AxiosResponse<LoginUser>> {
    return await axios.post<LoginUser>(
      "http://nest.tomfoolery.ru/auth/refresh",
      null,
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      },
    );
  }

  static async CheckUser(): Promise<AxiosResponse<UserMe>> {
    return await $api.get<UserMe>("/users/me");
  }

  static async LogoutUser(): Promise<AxiosResponse> {
    return await $api.post("/auth/logout");
  }
}
