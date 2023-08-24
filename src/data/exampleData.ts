import { ExampleData } from "../types/declarations";

export const exampleData: ExampleData = {
  personal: {
    fullName: "Milton Friedman",
    email: "milton.friedman@e.mail",
    phone: "+123 456 7890",
    location: "San Francisco, US",
  },
  education: [
    {
      id: "AScBYUkHnDlZH6fZgonLv",
      organization: "Rutgers University",
      position: "Bachelor of arts",
      start: "1928",
      end: "1932",
      location: "New Jersey",
      description: "",
      visible: true,
      expanded: false,
    },
    {
      id: "Q5mu3om6S7KtmJcGXcGjy",
      organization: "Chicago University",
      position: "Master of Arts",
      start: "1932",
      end: "1933",
      location: "New Jersey",
      description: "",
      visible: true,
      expanded: false,
    },
    {
      id: "VO38d92w5l8oSq8JGeGaL",
      organization: "Columbia University",
      position: "PhD",
      start: "1933",
      end: "1935",
      location: "New York",
      description: "",
      visible: true,
      expanded: false,
    },
  ],
  experience: [
    {
      id: "yRsIQj2bkaLKYEd9TaaF7",
      organization: "University of Chicago",
      position: "Professor",
      start: "1946",
      end: "1976",
      location: "Chicago",
      description:
        "In 1946, Friedman accepted an offer to teach economic theory at the University of Chicago (a position opened by departure of his former professor Jacob Viner to Princeton University). Friedman would work for the University of Chicago for the next 30 years.[39] There he contributed to the establishment of an intellectual community that produced a number of Nobel Memorial Prize winners, known collectively as the Chicago school of economics.",
      visible: true,
      expanded: false,
    },
  ],
};
export const blankData: ExampleData = {
  personal: {
    fullName: "",
    email: "",
    phone: "",
    location: "",
  },
  education: [],
  experience: [],
};
