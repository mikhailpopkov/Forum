import { useEffect } from "react";
import { AppRouter } from "./routes";
import { useAppDispatch } from "./store/store";
import "./styles/global.css";
import { checkUser } from "@/features/auth/model/authSlice";

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkUser());
  });

  return <AppRouter />;
};
