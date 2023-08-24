import {} from "react";
import styles from "./PreviewSection.module.css";
import { ExperienceEntry } from "../../types/declarations";

type Props = {
  data: ExperienceEntry[];
  title: string;
};
export default function PreviewSection({ data, title }: Props) {
  if (data.length === 0) {
    return null;
  }
  return (
    <section className={`${styles["preview-section"]}`}>
      <h3 className={`${styles["heading"]}`}>{title}</h3>
      {data.map((entry) =>
        entry.visible ? (
          <div key={entry.id} className={`${styles["grid-container"]}`}>
            <p className={styles.period}>
              {`${entry.start} \u2014 ${entry.end}`}
            </p>
            <h4 className={styles.organization}>{entry.organization}</h4>
            <p className={styles.location}>{entry.location}</p>{" "}
            <p className={styles.position}>{entry.position}</p>
            <p className={styles.description}>{entry.description}</p>
            {/* <p className={styles.description}>{entry.description}</p> */}
          </div>
        ) : null
      )}
    </section>
  );
}
