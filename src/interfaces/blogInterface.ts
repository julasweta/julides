export interface Block {
  title?:string,
  photo: string[];
  paragraph: string;
}

export interface Description {
  blocks: Block[];
}

export interface ICardInterior {
  id: number;
  title: string;
  short?:string,
  description: Description;
}