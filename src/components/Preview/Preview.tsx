import {} from "react";
import styles from "./Preview.module.css";
import PreviewSection from "../PreviewSection/PreviewSection";
import { PersonalInfo } from "../../types/declarations";

type Props = {
  personalInfo: PersonalInfo;
};
export default function Preview({ personalInfo }: Props) {
  const { fullName, email, phone, location } = personalInfo;

  return (
    <main className={styles.output}>
      <address className={styles.heading}>
        <h2 className={styles.name}>{fullName}</h2>
        <ul className={styles.contacts}>
          <li>{email}</li>
          <li>{phone}</li>
          <li>{location}</li>
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
