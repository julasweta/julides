import { ICardInterior } from "../interfaces/blogInterface";
import { IRes, apiBlogService } from "./ApiBlogServices";


const blogService = {
  getPosts: (): IRes<{ record: ICardInterior[] }> => apiBlogService.get(""),
};

export { blogService };