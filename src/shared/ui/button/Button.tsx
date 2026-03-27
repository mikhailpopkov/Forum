import type { ComponentPropsWithRef } from "react";
import cl from "./Button.module.scss";

interface BtnProps extends ComponentPropsWithRef<"button"> {
  children: React.ReactNode;
}

export const Button: React.FC<BtnProps> = ({ children, ...props }) => {
  return (
    <button className={cl.btn} {...props}>
      {children}
    </button>
  );
};
