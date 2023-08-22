import {} from "react";
import styles from "./EditorForm.module.css";
import { ExperienceEntry } from "../../types/declarations";
import FormInput from "../FormInput/FormInput";

type Props = {
  entry: ExperienceEntry;
  setData: React.Dispatch<React.SetStateAction<ExperienceEntry[]>>;
};
export default function EditorForm({ entry, setData }: Props) {
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
      <FormInput title="School">
        <input name="organization" defaultValue={entry.organization} />
      </FormInput>

      <FormInput title="Degree">
        <input name="position" defaultValue={entry.position} />
      </FormInput>

      <div className={`${styles["group"]} ${styles["period"]}`}>
        <FormInput title="Start">
          <input name="start" defaultValue={entry.start} />
        </FormInput>
        <FormInput title="End">
          <input name="end" defaultValue={entry.end} />
        </FormInput>
      </div>

      <FormInput title="Location">
        <input name="location" defaultValue={entry.location} />
      </FormInput>
      <div className={styles.group}>
        <button type="button" onClick={deleteEntry}>
          Delete
        </button>
        <button type="button" onClick={collapseForm}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
