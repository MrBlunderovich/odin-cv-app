import { useState } from "react";
import styles from "./EditorSection.module.css";
//import { PersonalInfo } from "../../types/declarations";

type Props = {
  title: string;
  //setState: React.Dispatch<React.SetStateAction<PersonalInfo>>;
  //handleChange: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
  icon: "school" | "work_outline";
};

export default function EditorSection({ title, children, icon }: Props) {
  const [expanded, setExpanded] = useState(false);
  /* function handleChange(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(event);
    const form = event.target;
    //const formFieldData = new FormData(form)
    //setState()
  } */

  return (
    <div className="editor-section">
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
      {expanded && <ul className="editor-section__list">{children}</ul>}
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
