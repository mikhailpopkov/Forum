import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import authReducer from "@features/auth/model/authSlice";
import newsReducer from "@features/news/model/newsSlice";
import usersReducer from "@features/users/model/usersSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
