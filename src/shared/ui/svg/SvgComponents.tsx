import News from "./icons/news.svg?react";
import Users from "./icons/users.svg?react";
import Login from "./icons/sign-in.svg?react";
import Registration from "./icons/sign-up.svg?react";
import Profile from "./icons/profile.svg?react";

interface SvgName {
  name: string;
}

export const SvgComponent: React.FC<SvgName> = ({ name }) => {
  switch (name) {
    case "news":
      return <News />;
      break;
    case "users":
      return <Users />;
      break;
    case "login":
      return <Login />;
      break;
    case "registration":
      return <Registration />;
      break;
    case "profile":
      return <Profile />;
      break;
    default:
      return "";
      break;
  }
};
