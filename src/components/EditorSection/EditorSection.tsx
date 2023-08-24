import { FC, useState } from "react";
import styles from "./EditorSection.module.css";
import { ExperienceEntry } from "../../types/declarations";
import Entry from "../Entry/Entry";
import EditorForm from "../EditorForm/EditorForm";

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

  const contents = expandedEntry ? (
    <EditorForm entry={expandedEntry} setData={setData} FieldSet={FieldSet} />
  ) : (
    <>
      <ul className="editor-section__list">
        {data.map((entry) => (
          <Entry key={entry.id} data={entry} setData={setData} />
        ))}
      </ul>
      <button className={`${styles["add-button"]} `}>+ {title}</button>
    </>
  );

  return (
    <div className={`${styles["editor-section"]} editor-section`}>
      <h3 className={`${styles["section-title"]} editor-section__title`}>
        <span className="material-icons-outlined">{icon}</span>
        {title}{" "}
        <button
          className={`${styles["expand-section"]} material-icons-outlined icon-button`}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "expand_less" : "expand_more"}
        </button>
      </h3>
      {expanded && contents}
    </div>
  );
}
