import {} from "react";
import EditorSection from "../EditorSection/EditorSection";
import FormInput from "../FormInput/FormInput";
import { PersonalInfo } from "../../types/declarations";

type Props = {
  personalInfo: PersonalInfo;
  setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfo>>;
};
export default function PersonalSection({
  personalInfo,
  setPersonalInfo,
}: Props) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const field = event.target.name;
    const newValue = event.target.value;
    setPersonalInfo({
      ...personalInfo,
      [field]: newValue,
    });
  }

  return (
    <div className="editor-section">
      <h3 className="editor-section__title">Personal Details</h3>
      <form className="editor-section__form">
        <FormInput title="Full Name">
          <input
            name="fullName"
            value={personalInfo.fullName}
            onChange={handleChange}
          />
        </FormInput>

        <FormInput title="Email">
          <input
            name="email"
            type="email"
            value={personalInfo.email}
            onChange={handleChange}
          />
        </FormInput>

        <FormInput title="Phone number">
          <input
            name="phone"
            value={personalInfo.phone}
            onChange={handleChange}
          />
        </FormInput>
        <FormInput title="Location">
          <input
            name="location"
            value={personalInfo.location}
            onChange={handleChange}
          />
        </FormInput>
      </form>
    </div>
  );
}

{
  /* <div className={styles["editor-section"]}>
      <h3 className={styles["editor-section__title"]}>{title}</h3>
      <form className={styles["editor-section__form"]}>{children}</form>
    </div> */
}
