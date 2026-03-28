import { Button } from "@/shared";
import type { FormProps, FormValidation } from "../model/types";
import cl from "./Auth.module.scss";
import { useForm } from "react-hook-form";
import { loginSchema } from "../model/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "@/app/store/store";
import { login } from "../model/authSlice";
import { Link, useNavigate } from "react-router";

export const LoginForm: React.FC<FormProps> = ({ title, subtitle }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValidation>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: FormValidation) => {
    dispatch(login(data));
    reset();
    navigate("/");
  };

  return (
    <div className={cl.formLogin}>
      <div className={cl.formTitle}>{title}</div>
      <div className={cl.formSubtitle}>{subtitle}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cl.formInput}>
          <label htmlFor="email">Email</label>
          <input
            {...register("email")}
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
          />
          {errors.email && (
            <p className={cl.formError}>{errors.email?.message}</p>
          )}
        </div>
        <div className={cl.formInput}>
          <label htmlFor="password">Пароль</label>
          <input
            {...register("password")}
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
          />
          {errors.password && (
            <p className={cl.formError}>{errors.password?.message}</p>
          )}
        </div>
        <Button>Войти</Button>
      </form>
      <div className={cl.formRedirect}>
        У вас нет аккаунта? <Link to="/registration">Зарегистрироваться</Link>
      </div>
    </div>
  );
};
