import { useEffect } from "react";
import { AppRouter } from "./routes";
import { useAppDispatch } from "./store/store";
import "./styles/global.css";
import { refresh } from "@/features/auth/model/authSlice";

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const refreshToken = localStorage.getItem("RefreshToken");
    if (refreshToken) {
      dispatch(refresh({ refreshToken }));
    }
  }, []);

  return <AppRouter />;
};
