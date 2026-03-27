import { Button } from "@/shared";
import type { FormProps } from "../model/types";
import cl from "./Auth.module.scss";

export const LoginForm: React.FC<FormProps> = ({ title, subtitle }) => {
  return (
    <div className={cl.formLogin}>
      <div className={cl.formTitle}>{title}</div>
      <div className={cl.formSubtitle}>{subtitle}</div>
      <form action="">
        <div className={cl.formInput}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
          />
        </div>
        <div className={cl.formInput}>
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
          />
        </div>
        <Button>Войти</Button>
      </form>
    </div>
  );
};
