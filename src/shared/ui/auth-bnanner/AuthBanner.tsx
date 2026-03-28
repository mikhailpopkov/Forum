import cl from "./LoginBanner.module.scss";

interface LoginBannerProps {
  title: string;
  subtitle: string;
  imgUrl: string;
}

export const LoginBanner: React.FC<LoginBannerProps> = ({
  title,
  subtitle,
  imgUrl,
}) => {
  return (
    <div className={cl.banner}>
      <img src={imgUrl} alt={title} />
      <div className={cl.bannerSubtitle}>{subtitle}</div>
      <h1 className={cl.bannerTitle}>{title}</h1>
    </div>
  );
};
