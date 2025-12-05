import { axiosInstance } from "../utils/api";

export const postData = async (body: Record<string, any>): Promise<any> => {
  return await axiosInstance.post("/blog", body);
};
