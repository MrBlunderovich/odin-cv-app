import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor/Editor";
import Preview from "./components/Preview/Preview";
import { ExampleData } from "./types/declarations";
//import EditorSection from "./components/EditorSection/EditorSection";
//import FormInput from "./components/FormInput/FormInput";
import PersonalSection from "./components/PersonalSection/PersonalSection";
import EditorSection from "./components/EditorSection/EditorSection";
import Entry from "./components/Entry/Entry";
import { nanoid } from "nanoid";

const exampleData: ExampleData = {
  personal: {
    fullName: "Milton Friedman",
    email: "milton.friedman@mail.email",
    phone: "+123 456 7890",
    location: "San Francisco, US",
  },
  education: [
    {
      id: "AScBYUkHnDlZH6fZgonLv",
      school: "Rutgers University",
      degree: "Bachelor of arts",
      start: "1928",
      end: "1932",
      location: "New Jersey",
      visible: true,
      expanded: false,
    },
    {
      id: "Q5mu3om6S7KtmJcGXcGjy",
      school: "Chicago University",
      degree: "Master of Arts",
      start: "1932",
      end: "1933",
      location: "New Jersey",
      visible: true,
      expanded: false,
    },
    {
      id: "VO38d92w5l8oSq8JGeGaL",
      school: "Columbia University",
      degree: "PhD",
      start: "1933",
      end: "1935",
      location: "New York City",
      visible: true,
      expanded: false,
    },
  ],
  experience: [
    {
      id: "yRsIQj2bkaLKYEd9TaaF7",
      company: "University of Chicago",
      position: "Professor",
      start: "1946",
      end: "1976",
      description:
        "In 1946, Friedman accepted an offer to teach economic theory at the University of Chicago (a position opened by departure of his former professor Jacob Viner to Princeton University). Friedman would work for the University of Chicago for the next 30 years.[39] There he contributed to the establishment of an intellectual community that produced a number of Nobel Memorial Prize winners, known collectively as the Chicago school of economics.",
      visible: true,
      expanded: false,
    },
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
          <EditorSection title="Education" icon="school">
            {educationInfo.map((entry) => (
              <Entry
                key={entry.id}
                data={entry}
                setData={setEducationInfo}
                title={entry.school}
              >
                <div>expanded</div>
              </Entry>
              /*  <p>{entry.school}</p> */
            ))}
          </EditorSection>
          <EditorSection title="Experience" icon="work_outline">
            {0}
          </EditorSection>
        </Editor>
        <Preview personalInfo={personalInfo} />
      </div>
    </>
  );
}

export default App;
