import {} from "react";
import { ExperienceEntry } from "../../types/declarations";
import styles from "./Entry.module.css";

type Props = {
  data: ExperienceEntry;
  setData: React.Dispatch<React.SetStateAction<ExperienceEntry[]>>;
};

export default function Entry({ data, setData }: Props) {
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

  return (
    <li onClick={expandEntry} className={styles.entry}>
      {data.organization}
      <button
        className="material-icons-outlined icon-button"
        onClick={toggleVisibility}
        aria-label={
          data.visible
            ? "hide this entry from output"
            : "show this entry in output"
        }
      >
        {data.visible ? "visibility" : "visibility_off"}
      </button>
    </li>
  );
}
