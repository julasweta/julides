import axios, { AxiosInstance, AxiosResponse } from "axios";

type IRes<DATA> = Promise<AxiosResponse<DATA>>;

const baseURL: string = process.env.REACT_BLOG_API ?? "https://api.jsonbin.io/v3/b/6520646c0574da7622b5621d";


const apiBlogService: AxiosInstance = axios.create({baseURL});

//прокидуємо токен
apiBlogService.interceptors.request.use((req) => {
  const token: string = process.env.REACT_APP_AUTH_APIKEY ?? "";

  req.headers.Authorization = token;
  return req;
});

export { apiBlogService, baseURL };
export type { IRes };