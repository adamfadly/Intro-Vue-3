import { apiClient } from "@/services/axios/apiInstance";

export const fetchEventList = async () => {
  const data = await apiClient.get("/events");
  const result = data.data;
  return result;
};
