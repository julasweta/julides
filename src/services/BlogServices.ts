import { ICardInterior } from '../interfaces/blogInterface';
import { IRes, apiService } from "./ApiServices";


const blogService = {
  getPosts: (): IRes<ICardInterior[]> => apiService.get(`posts`),
  addPost: (data: any): IRes<any> => apiService.post(`posts`, data),
};

export { blogService };