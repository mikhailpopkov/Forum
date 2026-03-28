import { Button } from "@/shared";
import type { FormProps, FormRegValidation } from "../model/types";
import cl from "./Auth.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { regSchema } from "../model/schema";
import { useAppDispatch } from "@/app/store/store";
import { registration } from "../model/authSlice";
import { Link, useNavigate } from "react-router";

export const RegistrationForm: React.FC<FormProps> = ({ title, subtitle }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormRegValidation>({
    mode: "onChange",
    resolver: yupResolver(regSchema),
  });

  const onSubmit = (data: FormRegValidation) => {
    dispatch(registration(data));
    reset();
    navigate("/");
  };

  return (
    <div className={cl.formReg}>
      <div className={cl.formTitle}>{title}</div>
      <div className={cl.formSubtitle}>{subtitle}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cl.formInput}>
          <label htmlFor="name">ФИО</label>
          <input
            {...register("name")}
            type="text"
            placeholder="Your full name"
          />
          {errors.name && (
            <p className={cl.formError}>{errors.name?.message}</p>
          )}
        </div>
        <div className={cl.formInput}>
          <label htmlFor="email">Email</label>
          <input
            {...register("email")}
            type="email"
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
            placeholder="Your password"
          />
          {errors.password && (
            <p className={cl.formError}>{errors.password?.message}</p>
          )}
        </div>
        <Button>Зарегистрироваться</Button>
        <div className={cl.formRedirect}>
          Уже есть аккаунт? <Link to="/login">Войти</Link>
        </div>
      </form>
    </div>
  );
};
