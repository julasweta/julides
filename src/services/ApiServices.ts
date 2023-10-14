import axios, { AxiosInstance, AxiosResponse } from "axios";

type IRes<DATA> = Promise<AxiosResponse<DATA>>;

const baseURL: string = process.env.REACT_APP_API ?? "";
const access: string = process.env.REACT_APP_ACCESS;
const master: string = process.env.REACT_APP_MASTER;
const token: string = process.env.REACT_APP_AUTH_APIKEY ?? "";

const apiService: AxiosInstance = axios.create({ baseURL });

//прокидуємо токен
apiService.interceptors.request.use((req) => {
   //req.headers.Authorization = `$2a$10$NYRTu/T1IztChsekJH9E/.uz601uUWoOJR.vvOOFfVruebuCJSbTa`; 
  req.headers['Content-Type'] = 'application/json';
//req.headers['X-Master-key'] = `$2b$10$2IpVEZwdLYarTk2uM0NsvOBZ1niJG1gcarXZ7ZjhR/josFWAB41RO`;
  req.headers['X-Access-Key'] = "$2a$10$NYRTu/T1IztChsekJH9E/.uz601uUWoOJR.vvOOFfVruebuCJSbTa";



  return req;
}, );



export { apiService, baseURL };
export type { IRes };
