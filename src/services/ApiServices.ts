import axios, { AxiosInstance, AxiosResponse } from "axios";

type IRes<DATA> = Promise<AxiosResponse<DATA>>;

const baseURL: string = process.env.REACT_APP_API ?? "";
console.log(baseURL);

const apiService: AxiosInstance = axios.create({ baseURL });

//прокидуємо токен
apiService.interceptors.request.use((req) => {
  const token: string = process.env.REACT_APP_AUTH_APIKEY ?? "";
console.log(token);
  req.headers.Authorization = token;
  return req;
});

export { apiService, baseURL };
export type { IRes };
