import {} from "react";
import styles from "./PreviewSection.module.css";

export default function PreviewSection() {
  return (
    <section className={`${styles["preview-section"]}`}>
      <h3 className={`${styles["heading"]}`}>Heading</h3>
      <div className={`${styles["grid-container"]}`}></div>
    </section>
  );
}
