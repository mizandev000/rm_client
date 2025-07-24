export interface TermDescription {
  id: number;
  text: string;
}

export interface TermItemProps {
  id: number;
  title: string;
  description: TermDescription[];
}
export interface TeamsItemData {
  item: any;
  title: string;
  description: [];
}
