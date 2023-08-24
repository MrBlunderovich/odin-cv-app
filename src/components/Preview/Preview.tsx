import { ReactNode } from "react";
import styles from "./Preview.module.css";
import { PersonalInfo } from "../../types/declarations";

type Props = {
  personalInfo: PersonalInfo;
  children: ReactNode;
};
export default function Preview({ personalInfo, children }: Props) {
  const { fullName, email, phone, location } = personalInfo;

  return (
    <main className={styles.output}>
      <address className={styles.heading}>
        <h2 className={styles.name}>{fullName}</h2>
        <ul className={styles.contacts}>
          {email && (
            <li>
              <i className="material-icons-outlined" aria-hidden>
                email
              </i>
              {email}
            </li>
          )}
          {phone && (
            <li>
              <i className="material-icons-outlined" aria-hidden>
                phone
              </i>
              {phone}
            </li>
          )}
          {location && (
            <li>
              <i className="material-icons-outlined" aria-hidden>
                place
              </i>
              {location}
            </li>
          )}
        </ul>
      </address>
      <div className={styles.container}>{children}</div>
    </main>
  );
}
