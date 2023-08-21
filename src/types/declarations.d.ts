export type PersonalInfo = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
};

export type EducationEntry = {
  id: string;
  school: string;
  degree: string;
  start: string;
  end: string;
  location: string;
  visible: boolean;
  expanded: boolean;
};

export type ExperienceEntry = {
  id: string;
  company: string;
  position: string;
  start: string;
  end: string;
  description: string;
  visible: boolean;
  expanded: boolean;
};

export type ExampleData = {
  personal: PersonalInfo;
  education: EducationEntry[];
  experience: ExperienceEntry[];
};
