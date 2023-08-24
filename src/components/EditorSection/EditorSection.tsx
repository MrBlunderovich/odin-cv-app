import { FC, useState } from "react";
import styles from "./EditorSection.module.css";
import { ExperienceEntry } from "../../types/declarations";
import Entry from "../Entry/Entry";
import EditorForm from "../EditorForm/EditorForm";
import { nanoid } from "nanoid";
import Button from "../Button/Button";

type Props = {
  title: string;
  FieldSet: FC<{ entry: ExperienceEntry }>;
  icon: "school" | "work_outline";
  data: ExperienceEntry[];
  setData: React.Dispatch<React.SetStateAction<ExperienceEntry[]>>;
};

export default function EditorSection({
  title,
  icon,
  data,
  setData,
  FieldSet,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const expandedEntry = data.find((entry) => entry.expanded);

  function createNewEntry() {
    setData((perv) => [...perv, newEntry()]);
  }

  function newEntry(): ExperienceEntry {
    return {
      id: nanoid(),
      organization: "",
      position: "",
      start: "",
      end: "",
      location: "",
      description: "",
      visible: true,
      expanded: true,
    };
  }

  const contents = expandedEntry ? (
    <EditorForm entry={expandedEntry} setData={setData} FieldSet={FieldSet} />
  ) : (
    <>
      <ul className="editor-section__list">
        {data.map((entry) => (
          <Entry key={entry.id} data={entry} setData={setData} />
        ))}
      </ul>
      <Button
        className={`${styles["add-button"]} `}
        onClick={createNewEntry}
        type="button"
      >
        + {title}
      </Button>
    </>
  );

  return (
    <div className={`${styles["editor-section"]} editor-section`}>
      <h3
        className={`${styles["section-title"]} editor-section__title`}
        onClick={() => setExpanded(!expanded)}
      >
        <span className="material-icons-outlined">{icon}</span>
        {title}{" "}
        <button
          className={`${styles["expand-section"]} material-icons-outlined icon-button`}
          aria-label={expanded ? "collapse" : "expand"}
        >
          {expanded ? "expand_less" : "expand_more"}
        </button>
      </h3>
      {expanded && contents}
    </div>
  );
}
