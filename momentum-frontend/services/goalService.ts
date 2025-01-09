import axiosInstance from "@/utils/axiosInstance";

export const fetchGoals = async () => {
  const { data } = await axiosInstance.get("/goals");
  return data;
};
