import {} from "react";
import { ExperienceEntry } from "../../types/declarations";
import styles from "./Entry.module.css";

type Props = {
  data: ExperienceEntry;
  setData: React.Dispatch<React.SetStateAction<ExperienceEntry[]>>;
  //children: React.ReactNode;
};

export default function Entry({ data, setData /* children */ }: Props) {
  //const isExpanded = data.expanded;
  const id = data.id;

  function toggleVisibility(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.stopPropagation();
    setData((prev: any) => {
      return prev.map((entry: ExperienceEntry) =>
        entry.id === id ? { ...entry, visible: !data.visible } : entry
      );
    });
  }

  function expandEntry() {
    setData((prev: any) => {
      return prev.map((entry: ExperienceEntry) =>
        entry.id === id
          ? { ...entry, expanded: true }
          : { ...entry, expanded: false }
      );
    });
  }

  /* if (isExpanded) {
    return <>{children}</>;
  } */
  return (
    <li onClick={expandEntry} className={styles.entry}>
      {data.organization}
      <button
        className="material-icons-outlined icon-button"
        onClick={toggleVisibility}
      >
        {data.visible ? "visibility" : "visibility_off"}
      </button>
    </li>
  );
}
//<span class="material-icons-outlined">visibility</span>
//<span class="material-icons-outlined">visibility_off</span>
