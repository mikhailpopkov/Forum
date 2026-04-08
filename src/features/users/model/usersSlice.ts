import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Users } from "./types";
import { RequestsUsers } from "../api/RequestsUsers";

interface MetaTypes {
  page: number;
  limit: number;
}

export const fetchUsers = createAsyncThunk<
  Users,
  MetaTypes,
  { rejectValue: string }
>("users/fetch", async ({ page, limit }, { rejectWithValue }) => {
  try {
    const res = await RequestsUsers.FetchUsers(page, limit);
    return res.data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    }

    return rejectWithValue("Ошибка при получении пользователей");
  }
});

const initialState: Users = {
  data: null,
  meta: null,
  status: "idle",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.meta = action.payload.meta;
        state.status = "success";
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.data = null;
        state.meta = null;
        state.status = "error";
      });
  },
});

export default usersSlice.reducer;
