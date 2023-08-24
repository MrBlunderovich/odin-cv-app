export type PersonalInfo = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
};

export type ExperienceEntry = {
  id: string;
  organization: string;
  position: string;
  start: string;
  end: string;
  location: string;
  description: string;
  visible: boolean;
  expanded: boolean;
};

export type ExampleData = {
  personal: PersonalInfo;
  education: ExperienceEntry[];
  experience: ExperienceEntry[];
};
