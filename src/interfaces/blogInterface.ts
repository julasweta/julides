export interface Block {
  photo: string;
  paragraph: string;
}

export interface Description {
  blocks: Block[];
}

export interface ICardInterior {
  id: number;
  title: string;
  description: Description;
}