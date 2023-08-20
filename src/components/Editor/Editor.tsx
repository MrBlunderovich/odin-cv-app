import {} from "react";
import styles from "./Editor.module.css";

export default function Editor({ children }: { children: React.ReactNode }) {
  return <aside className={styles.editor}>{children}</aside>;
}
