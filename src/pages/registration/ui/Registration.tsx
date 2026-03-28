import { LoginBanner } from "@/shared";
import cl from "./Registration.module.scss";
import { RegistrationForm } from "@/features";

export const Registration: React.FC = () => {
  return (
    <section className={cl.registration}>
      <LoginBanner
        title="Форумный дашборд"
        subtitle="Инновационный"
        imgUrl="/registration-bg.webp"
      />
      <RegistrationForm
        title="Добро пожаловать!"
        subtitle="Используйте эту форму для регистрации на платформе"
      />
    </section>
  );
};
