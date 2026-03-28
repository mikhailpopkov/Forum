import * as yup from "yup";

const emailValidation = new RegExp(
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
);

export const schema = yup.object({
  email: yup
    .string()
    .trim()
    .required("Обязательное поле")
    .matches(emailValidation, "Неверный формат email"),
  password: yup
    .string()
    .trim()
    .required("Обязательное поле")
    .min(6, "Минимальная длина пароля 6 символов"),
});
