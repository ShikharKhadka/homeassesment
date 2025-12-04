import { axiosInstance } from "../utils/api";

export const getList = async (): Promise<any> => {
  return await axiosInstance.get("/blog");
};
