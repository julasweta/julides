export interface Block {
  title?:string,
  photo: string[];
  paragraph: string;
}

export interface Description {
  blocks: Block[];
}

export interface ICardInterior {
  _id: string;
  title: string;
  short?:string,
  description: Description;
}

export interface ICardInteriorReq {
  title: string;
  short?: string,
  description: Description;
}