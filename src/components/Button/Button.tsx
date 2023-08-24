import { ReactNode } from "react";
import styles from "./Button.module.css";

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
};
export default function Button({
  onClick,
  children,
  className,
  type = "submit",
}: Props) {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
