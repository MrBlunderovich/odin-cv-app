import {} from "react";
import { EducationEntry, ExperienceEntry } from "../../types/declarations";
import styles from "./Entry.module.css";

type Props = {
  data: EducationEntry | ExperienceEntry;
  setData:
    | React.Dispatch<React.SetStateAction<EducationEntry[]>>
    | React.Dispatch<React.SetStateAction<ExperienceEntry[]>>;
  title: string;
  children: React.ReactNode;
};

export default function Entry({ data, setData, title, children }: Props) {
  const isExpanded = data.expanded;
  const id = data.id;

  function handleToggleVisibility(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.stopPropagation();
    setData((prev: any) => {
      return prev.map((entry: EducationEntry | ExperienceEntry) =>
        entry.id === id ? { ...entry, visible: !data.visible } : entry
      );
    });
  }

  function handleExpandEntry() {
    setData((prev: any) => {
      return prev.map((entry: EducationEntry | ExperienceEntry) =>
        entry.id === id
          ? { ...entry, expanded: true }
          : { ...entry, expanded: false }
      );
    });
  }

  if (isExpanded) {
    return <>{children}</>;
  }
  return (
    <li onClick={handleExpandEntry} className={styles.entry}>
      {title}{" "}
      <button
        className="material-icons-outlined icon-button"
        onClick={handleToggleVisibility}
      >
        {data.visible ? "visibility" : "visibility_off"}
      </button>
    </li>
  );
}
//<span class="material-icons-outlined">visibility</span>
//<span class="material-icons-outlined">visibility_off</span>
