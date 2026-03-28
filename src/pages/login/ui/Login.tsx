import { LoginBanner } from "@/shared";
import cl from "./Login.module.scss";
import { LoginForm } from "@/features";

export const Login: React.FC = () => {
  return (
    <section className={cl.login}>
      <LoginBanner
        title="Форумный дашборд"
        subtitle="Инновационный"
        imgUrl="/login-bg.webp"
      />
      <LoginForm
        title="Приветствуем!"
        subtitle="Введите ваш email и пароль, чтобы войти"
      />
    </section>
  );
};
