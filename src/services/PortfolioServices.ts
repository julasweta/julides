import { ICard } from "../interfaces/globalInterface";
import { IRes, apiService } from "./ApiServices";

const portfolioService = {
  getPortfolio: (): IRes<ICard[]> => apiService.get(`works`),
};

export { portfolioService };
