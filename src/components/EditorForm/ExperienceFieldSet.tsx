import { ExperienceEntry } from "../../types/declarations";
import FormInput from "../FormInput/FormInput";
import styles from "./EditorForm.module.css";

export default function ExperienceFieldSet({
  entry,
}: {
  entry: ExperienceEntry;
}) {
  return (
    <>
      <FormInput title="Company">
        <input name="organization" defaultValue={entry.organization} />
      </FormInput>

      <FormInput title="Position">
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

      <FormInput title="Description">
        <textarea
          name="description"
          defaultValue={entry.description}
          rows={5}
        ></textarea>
      </FormInput>
    </>
  );
}
