import { useEffect, useRef, useState } from "react";
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
import { ExampleData } from "./types/declarations";

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personal);
  const [educationInfo, setEducationInfo] = useState(exampleData.education);
  const [experienceInfo, setExperienceInfo] = useState(exampleData.experience);
  const isFirstRender = useRef(true);
  console.log("initialization");

  useEffect(() => {
    const savedData = localStorage.getItem("resumeData");
    if (savedData) {
      console.log("loading data");
      const data = JSON.parse(savedData) as ExampleData;
      setPersonalInfo(data.personal);
      setEducationInfo(data.education);
      setExperienceInfo(data.experience);
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const data = {
      personal: personalInfo,
      education: educationInfo,
      experience: experienceInfo,
    };
    console.log("setting data");
    localStorage.setItem("resumeData", JSON.stringify(data));
  }, [personalInfo, educationInfo, experienceInfo]);

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
