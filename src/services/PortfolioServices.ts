import { ICard } from "../interfaces/globalInterface";
import { IRes, apiService } from "./ApiServices";

const portfolioService = {
  getPortfolio: (): IRes<{ record: ICard[] }> => apiService.get(""),
};

export { portfolioService };
