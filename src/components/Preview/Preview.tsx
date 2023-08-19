import {} from "react";
import styles from "./Preview.module.css";
import PreviewSection from "../PreviewSection/PreviewSection";

export default function Preview() {
  return (
    <main className={styles.output}>
      <address className={styles.heading}>
        <h2 className={styles.name}>Walter White</h2>
        <ul className={styles.contacts}>
          <li>walter.white@pollos.com</li>
          <li>+123 456 7890</li>
          <li>Albuquerque, US</li>
        </ul>
      </address>
      <div className={styles.container}>
        <PreviewSection />
        <PreviewSection />
        <PreviewSection />
      </div>
    </main>
  );
}
