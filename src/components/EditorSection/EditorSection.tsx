import { useState } from "react";
import styles from "./EditorSection.module.css";
import { ExperienceEntry } from "../../types/declarations";
import Entry from "../Entry/Entry";
import EditorForm from "../EditorForm/EditorForm";
//import { PersonalInfo } from "../../types/declarations";

type Props = {
  title: string;
  //setState: React.Dispatch<React.SetStateAction<PersonalInfo>>;
  //handleChange: (event: React.FormEvent<HTMLFormElement>) => void;
  //children: React.ReactNode;
  icon: "school" | "work_outline";
  data: ExperienceEntry[];
  setData: React.Dispatch<React.SetStateAction<ExperienceEntry[]>>;
};

export default function EditorSection({ title, icon, data, setData }: Props) {
  const [expanded, setExpanded] = useState(false);
  /* function handleChange(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(event);
    const form = event.target;
    //const formFieldData = new FormData(form)
    //setState()
  } */
  const expandedEntry = data.find((entry) => entry.expanded);

  const contents = expandedEntry ? (
    <EditorForm entry={expandedEntry} setData={setData} />
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

{
  /* <div className={styles["editor-section"]}>
      <h3 className={styles["editor-section__title"]}>{title}</h3>
      <form className={styles["editor-section__form"]}>{children}</form>
    </div> */
}

//<span class="material-icons-outlined">school</span>
//<span class="material-icons-outlined">work_outline</span>
//<span class="material-icons-outlined">delete_forever</span>
//<span class="material-icons-outlined">visibility</span>
//<span class="material-icons-outlined">visibility_off</span>
