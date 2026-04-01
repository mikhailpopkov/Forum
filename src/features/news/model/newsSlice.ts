import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { NewsType } from "./types";
import { RequestsNews } from "../api/RequestsNews";

export const fetchNews = createAsyncThunk<
  NewsType,
  void,
  { rejectValue: string }
>("news/fetch", async (_, { rejectWithValue }) => {
  try {
    const res = await RequestsNews.FetchNews();
    return res.data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    }

    return rejectWithValue("Ошибка при получении новостей с сервера");
  }
});

interface StateType extends NewsType {
  status: "loading" | "success" | "error" | "idle";
}

const initialState: StateType = {
  status: "idle",
  data: [],
  meta: null,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
        state.data = [];
        state.meta = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload.data;
        state.meta = action.payload.meta;
      })
      .addCase(fetchNews.rejected, (state) => {
        state.status = "error";
        state.data = [];
        state.meta = null;
      });
  },
});

export default newsSlice.reducer;
