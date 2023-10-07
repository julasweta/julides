import { ICard } from "../interfaces/globalInterface";
import { IRes, apiService } from "./ApiServices";

const portfolioService = {
  getPortfolio: (): IRes<{ record: ICard[] }> => apiService.get(`650f582e12a5d37659823803`),
};

export { portfolioService };
