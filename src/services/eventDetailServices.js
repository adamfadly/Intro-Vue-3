import { apiClient } from "@/services/axios/apiInstance";

export function fetchEventDetails(id) {
  const data = apiClient.get(`event/${id}`);
  console.log(data);
  return data;
}
