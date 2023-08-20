export type PersonalInfo = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
};

export type EducationEntry = {
  school: string;
  degree: string;
  start: string;
  end: string;
  location: string;
};

export type ExperienceEntry = {
  company: string;
  position: string;
  start: string;
  end: string;
  description: string;
};

export type ExampleData = {
  personal: PersonalInfo;
  education: EducationEntry[];
  experience: ExperienceEntry[];
};
