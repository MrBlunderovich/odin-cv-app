import { Dispatch, SetStateAction } from "react";
import styles from "./EditorControls.module.css";
import Button from "../Button/Button";
import { ExperienceEntry, PersonalInfo } from "../../types/declarations";
import { blankData, exampleData } from "../../data/exampleData";

type Props = {
  setPersonalInfo: Dispatch<SetStateAction<PersonalInfo>>;
  setEducationInfo: React.Dispatch<React.SetStateAction<ExperienceEntry[]>>;
  setExperienceInfo: React.Dispatch<React.SetStateAction<ExperienceEntry[]>>;
};
export default function EditorControls({
  setPersonalInfo,
  setEducationInfo,
  setExperienceInfo,
}: Props) {
  function resetToExampleData() {
    setPersonalInfo(exampleData.personal);
    setEducationInfo(exampleData.education);
    setExperienceInfo(exampleData.experience);
  }

  function clearAllData() {
    setPersonalInfo(blankData.personal);
    setEducationInfo(blankData.education);
    setExperienceInfo(blankData.experience);
  }

  return (
    <div className={styles.controls}>
      <Button className={styles.delete} onClick={clearAllData}>
        Clear Resume
      </Button>
      <Button onClick={resetToExampleData}>Load Example</Button>
    </div>
  );
}
