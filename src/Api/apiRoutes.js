import API from "./api";
export const fetchDataRoute = async () => {
  const response = await API.get("/");
  return response;
};
