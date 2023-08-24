import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor/Editor";
import Preview from "./components/Preview/Preview";
import { exampleData } from "./data/exampleData";
import PersonalSection from "./components/PersonalSection/PersonalSection";
import EditorSection from "./components/EditorSection/EditorSection";
import PreviewSection from "./components/PreviewSection/PreviewSection";
import EducationFieldSet from "./components/EditorForm/EducationFieldSet";
import ExperienceFieldSet from "./components/EditorForm/ExperienceFieldSet";
import EditorControls from "./components/EditorControls/EditorControls";

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personal);
  const [educationInfo, setEducationInfo] = useState(exampleData.education);
  const [experienceInfo, setExperienceInfo] = useState(exampleData.experience);

  return (
    <>
      <div className="app-container">
        <Editor>
          <EditorControls
            setPersonalInfo={setPersonalInfo}
            setEducationInfo={setEducationInfo}
            setExperienceInfo={setExperienceInfo}
          />
          <PersonalSection
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />
          <EditorSection
            title="Education"
            icon="school"
            data={educationInfo}
            setData={setEducationInfo}
            FieldSet={EducationFieldSet}
          />
          <EditorSection
            title="Experience"
            icon="work_outline"
            data={experienceInfo}
            setData={setExperienceInfo}
            FieldSet={ExperienceFieldSet}
          />
        </Editor>
        <Preview personalInfo={personalInfo}>
          {educationInfo.some((entry) => entry.visible) && (
            <PreviewSection title="Education" data={educationInfo} />
          )}
          {experienceInfo.some((entry) => entry.visible) && (
            <PreviewSection
              title="Professional Experience"
              data={experienceInfo}
            />
          )}
        </Preview>
      </div>
    </>
  );
}

export default App;
