import { FC } from "react";
import styles from "./EditorForm.module.css";
import { ExperienceEntry } from "../../types/declarations";
import Button from "../Button/Button";

type Props = {
  entry: ExperienceEntry;
  setData: React.Dispatch<React.SetStateAction<ExperienceEntry[]>>;
  FieldSet: FC<{ entry: ExperienceEntry }>;
};
export default function EditorForm({ entry, setData, FieldSet }: Props) {
  const currentId = entry.id;

  function collapseForm() {
    setData((prev) => {
      return prev.map((entry) => ({ ...entry, expanded: false }));
    });
  }

  function deleteEntry() {
    setData((prev) => {
      return prev.filter((entry) => entry.id !== currentId);
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const newEntry = {} as ExperienceEntry;
    newEntry.organization = form.organization.value;
    newEntry.position = form.position.value;
    newEntry.start = form.start.value;
    newEntry.end = form.end.value;
    newEntry.location = form.location.value;
    newEntry.description = form.description ? form.description.value : "";
    newEntry.expanded = false;
    setData((prev) => {
      return prev.map((entry) =>
        entry.id === currentId ? { ...entry, ...newEntry } : entry
      );
    });
  }

  return (
    <form
      className={`${styles["editor-form"]} editor-section__form`}
      onSubmit={handleSubmit}
    >
      <FieldSet entry={entry} />
      <div className={`${styles.group} ${styles.buttons}`}>
        <Button type="button" onClick={deleteEntry}>
          Delete
        </Button>
        <Button type="button" onClick={collapseForm}>
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}
