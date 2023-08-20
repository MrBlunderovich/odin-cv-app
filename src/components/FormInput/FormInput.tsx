import styles from "./FormInput.module.css";

type Props = {
  title: string;
  children: React.ReactNode;
};
export default function FormInput({ title, children }: Props) {
  return (
    <label className={`${styles["form-input-label"]}`}>
      {title}
      {children}
    </label>
  );
}
