import {} from "react";
import styles from "./EditorSection.module.css";
//import { PersonalInfo } from "../../types/declarations";

type Props = {
  title: string;
  //setState: React.Dispatch<React.SetStateAction<PersonalInfo>>;
  //handleChange: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
};

export default function EditorSection({ title, children }: Props) {
  /* function handleChange(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(event);
    const form = event.target;
    //const formFieldData = new FormData(form)
    //setState()
  } */

  return (
    <div className={styles["editor-section"]}>
      <h3 className={styles["editor-section__title"]}>{title}</h3>
      <form className={styles["editor-section__form"]}>{children}</form>
    </div>
  );
}
