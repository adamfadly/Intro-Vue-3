import { apiClient } from "@/services/axios/apiInstance";

export const fetchEventList = async () => {
  const data = await apiClient.get("/events");
  const result = data.data;
  return result;
};
export const fetchEventDetails = async () => {
  let id = "456";
  const { data } = await apiClient.get("/events/" + id);
  // console.log(data, "services");
  return data;
};
