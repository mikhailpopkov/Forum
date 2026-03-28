import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { LoginUser } from "./types";
import AuthUser from "../api/auth";

interface LoginType {
  email: string;
  password: string;
}

export const login = createAsyncThunk<
  LoginUser,
  LoginType,
  { rejectValue: string }
>("auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const res = await AuthUser.LoginUser(email, password);
    return res.data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }

    return rejectWithValue("Произошла ошибка авторизации");
  }
});

interface UserState {
  user: LoginUser | null;
  status: "loading" | "success" | "error" | "idle";
  isAuth: boolean;
}

const initialState: UserState = {
  user: null,
  status: "idle",
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.user = null;
        state.status = "loading";
        state.isAuth = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "success";
        state.isAuth = true;

        localStorage.setItem("AccessToken", action.payload.access_token);
        localStorage.setItem("RefreshToken", action.payload.refresh_token);
        window.location.href = "/";
      })
      .addCase(login.rejected, (state) => {
        state.user = null;
        state.status = "error";
        state.isAuth = false;
      });
  },
});

export default authSlice.reducer;
