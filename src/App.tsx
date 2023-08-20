import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor/Editor";
import Preview from "./components/Preview/Preview";
import { ExampleData } from "./types/declarations";
//import EditorSection from "./components/EditorSection/EditorSection";
//import FormInput from "./components/FormInput/FormInput";
import PersonalSection from "./components/PersonalSection/PersonalSection";
import EditorSection from "./components/EditorSection/EditorSection";

const exampleData: ExampleData = {
  personal: {
    fullName: "Walter White",
    email: "walter.white@pollos.com",
    phone: "+123 456 7890",
    location: "Albuquerque, US",
  },
  education: [{ school: "", degree: "", start: "", end: "", location: "" }],
  experience: [
    { company: "", position: "", start: "", end: "", description: "" },
  ],
};

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personal);
  const [educationInfo, setEducationInfo] = useState(exampleData.education);
  const [experienceInfo, setExperienceInfo] = useState(exampleData.experience);

  return (
    <>
      <div className="app-container">
        <Editor>
          <PersonalSection
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />
          <EditorSection title="Education">{0}</EditorSection>
        </Editor>
        <Preview personalInfo={personalInfo} />
      </div>
    </>
  );
}

export default App;
