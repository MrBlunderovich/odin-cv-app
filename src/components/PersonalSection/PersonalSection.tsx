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
    <EditorSection title="Personal Details">
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
    </EditorSection>
  );
}
