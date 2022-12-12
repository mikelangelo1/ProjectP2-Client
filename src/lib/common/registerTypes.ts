import { Option } from "../../models/utilities";

export const typeHeader = "What would you like to do ?";
export const typeSubHeader =
  "Share your intent with us for a more customized experience";
export const userTypes: Option[] = [
  {
    title: "Plan projects",
    description: "Create an account to manage your projects",
    value: "list",
    icon: "bulboutlined",
  },
  {
    title: "Project Mangers",
    description: "Create an account to manage startups and enterprise business",
    value: "offset_personal",
    icon: "pluscircleoutlined",
  },
  {
    title: "Bug tracking",
    description: "Create an account to track and monitor bugs",
    value: "offset_company",
    icon: "pluscircleoutlined",
  },
];
export const offsetTypes: Option[] = [
  {
    title: "Calculate & Offset my Personal Emissions",
    description: "Calculate and offset your carbon footprint",
    value: "personal",
    icon: "pluscircleoutlined",
  },
  {
    title: `Calculate & Offset my Organization Emissions`,
    description: "Calculate and offset your carbon footprint",
    value: "organisation",
    icon: "pluscircleoutlined",
  },
];
