import { HomeServiceIcon } from "@/components/home/HomeServiceIcon";
import { ReactNode } from "react";
type IconKey = keyof typeof HomeServiceIcon;
export interface HomeServiceDataProps {
  iconKey: IconKey;
  title: string;
  details: string;
}
export interface HomeServiceProps {
  title: string;
  details: string;
  icon?: ReactNode;
}
export interface HomeStepProps {
  step: string;
  title: string;
  details: string;
}
export interface TestimonialPropsItem {
  message: string;
  location: string;
  name: string;
  photo: string;
}
