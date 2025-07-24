export interface PageSectionProps {
  page_title: string;
  page_sub_title: string;
}
export interface ServiceProps {
  title: string;
  sub_title: string;
  description: string;
  costs_title: string;
  costs_subtitle: string;
  image: string;
  position: boolean;
  // image_two: string;
}
export interface ChooseProps {
  chooseData: any;
  choose_title: string;
  choose_subtitle: string;
}
export interface ChooseDataProps {
  id: number;
  title: string;
  details: string;
}
export interface HelpFastProps {
  title: string;
  description: string;
}
export interface ServiceFaqsItemsProps {
  id?: number;
  title: string;
  sub_title: string;
}
export interface ServiceFaqsProps {
  faqsData: ServiceFaqsItemsProps[];
  // Any additional optional properties
  anotherProp?: string;
}
