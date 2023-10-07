import { ICardInterior } from "../interfaces/blogInterface";
import { IRes, apiService } from "./ApiServices";


const blogService = {
  getPosts: (): IRes<{ record: ICardInterior[] }> => apiService.get(`6520646c0574da7622b5621d`),
  addPost: (data:ICardInterior):IRes<any> => apiService.post(`6520646c0574da7622b5621d`, data),
};

export { blogService };