import cl from "./LoginBanner.module.scss";

interface LoginBannerProps {
  title: string;
  subtitle: string;
}

export const LoginBanner: React.FC<LoginBannerProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className={cl.banner}>
      <img src=" /login-bg.webp" alt={title} />
      <div className={cl.bannerSubtitle}>{subtitle}</div>
      <h1 className={cl.bannerTitle}>{title}</h1>
    </div>
  );
};
