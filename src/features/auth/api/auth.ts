import { $api } from "@/shared/model";
import type { LoginUser } from "../model/types";
import type { AxiosResponse } from "axios";

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
}
